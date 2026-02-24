const bugModel = require("../modules/bug/bug.model");

class MetricsService {
	async getDashboardMetrics() {
		const totalBugs = await bugModel.countDocuments();

		const statusStats = await bugModel.aggregate([
			{
				$group: {
					_id: "$status",
					count: { $sum: 1 },
				},
			},
		]);

		const priorityStats = await bugModel.aggregate([
			{
				$group: {
					_id: "$priority",
					count: { $sum: 1 },
				},
			},
		]);

		const moduleHeatmap = await bugModel.aggregate([
			{
				$group: {
					_id: "$module",
					count: { $sum: 1 },
				},
			},
		]);

		return {
			totalBugs,
			statusStats,
			priorityStats,
			moduleHeatmap,
		};
	}
}

module.exports = new MetricsService();

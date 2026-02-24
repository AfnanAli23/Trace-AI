const bugModel = require("../bug/bug.model");

class DashboardService {
	async getOverview() {
		const totalBugs = await bugModel.countDocuments();

		const openBugs = await bugModel.countDocuments({ status: "open" });

		const resolvedBugs = await bugModel.countDocuments({
			status: "resolved",
		});

		const criticalBugs = await bugModel.countDocuments({
			priority: "critical",
		});

		return {
			totalBugs,
			openBugs,
			resolvedBugs,
			criticalBugs,
		};
	}

	async bugsByStatus() {
		return bugModel.aggregate([
			{
				$group: {
					_id: "$status",
					count: { $sum: 1 },
				},
			},
		]);
	}

	async bugsByPriority() {
		return bugModel.aggregate([
			{
				$group: {
					_id: "$priority",
					count: { $sum: 1 },
				},
			},
		]);
	}

	async mostAffectedModules() {
		return bugModel.aggregate([
			{
				$group: {
					_id: "$module",
					count: { $sum: 1 },
				},
			},
			{
				$sort: { count: -1 },
			},
			{
				$limit: 5,
			},
		]);
	}

	async resolutionTime() {
		return bugModel.aggregate([
			{
				$match: {
					status: "resolved",
					updatedAt: { $exists: true },
				},
			},
			{
				$project: {
					resolutionTime: {
						$subtract: ["$updatedAt", "$createdAt"],
					},
				},
			},
			{
				$group: {
					_id: null,
					avgResolutionTime: { $avg: "$resolutionTime" },
				},
			},
		]);
	}

	async bugsTrend(days = 7) {
		return bugModel.aggregate([
			{
				$match: {
					createdAt: {
						$gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000),
					},
				},
			},
			{
				$group: {
					_id: {
						$dateToString: {
							format: "%Y-%m-%d",
							date: "$createdAt",
						},
					},
					count: { $sum: 1 },
				},
			},
			{
				$sort: { _id: 1 },
			},
		]);
	}
}

module.exports = new DashboardService();

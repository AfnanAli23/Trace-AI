const dashboardService = require("./dashboard.service");

class DashboardController {
	async overview(req, res, next) {
		try {
			const data = await dashboardService.getOverview();

			return res.status(200).json({
				success: true,
				data,
			});
		} catch (err) {
			next(err);
		}
	}

	async statusStats(req, res, next) {
		try {
			const data = await dashboardService.bugsByStatus();

			return res.status(200).json({
				success: true,
				data,
			});
		} catch (err) {
			next(err);
		}
	}

	async priorityStats(req, res, next) {
		try {
			const data = await dashboardService.bugsByPriority();

			return res.status(200).json({
				success: true,
				data,
			});
		} catch (err) {
			next(err);
		}
	}

	async modules(req, res, next) {
		try {
			const data = await dashboardService.mostAffectedModules();

			return res.status(200).json({
				success: true,
				data,
			});
		} catch (err) {
			next(err);
		}
	}

	async resolution(req, res, next) {
		try {
			const data = await dashboardService.resolutionTime();

			return res.status(200).json({
				success: true,
				data,
			});
		} catch (err) {
			next(err);
		}
	}

	async trend(req, res, next) {
		try {
			const days = req.query.days || 7;

			const data = await dashboardService.bugsTrend(Number(days));

			return res.status(200).json({
				success: true,
				data,
			});
		} catch (err) {
			next(err);
		}
	}
}

module.exports = new DashboardController();

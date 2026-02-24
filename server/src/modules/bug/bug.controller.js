const bugService = require("./bug.service");

class BugController {
	async create(req, res) {
		try {
			const bug = await bugService.createBug(req.body, req.user.id);

			return res.status(201).json({
				message: "Bug created successfully",
				data: bug,
			});
		} catch (err) {
			console.log(err);
		}
	}

	async getAll(req, res) {
		try {
			const bugs = await bugService.getAllBugs();

			return res.status(200).json({
				data: bugs,
			});
		} catch (err) {
			console.log(err);
		}
	}

	async getOne(req, res) {
		try {
			const bug = await bugService.getBugById(req.params.id);

			return res.status(200).json({
				data: bug,
			});
		} catch (err) {
			console.log(err);
		}
	}

	async update(req, res) {
		try {
			const bug = await bugService.updateBug(req.params.id, req.body);

			return res.status(200).json({
				message: "Bug updated",
				data: bug,
			});
		} catch (err) {
			console.log(err);
		}
	}

	async delete(req, res) {
		try {
			await bugService.deleteBug(req.params.id);

			return res.status(200).json({
				message: "Bug deleted",
			});
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = new BugController();

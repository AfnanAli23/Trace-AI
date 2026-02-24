const userService = require("./user.service");

exports.getProfile = async (req, res, next) => {
	try {
		const user = await userService.getProfile(req.user.id);
		return res.json(user);
	} catch (err) {
		next(err);
	}
};

exports.getUsers = async (req, res, next) => {
	try {
		const users = await userService.getAllUsers();
		return res.json(users);
	} catch (err) {
		next(err);
	}
};

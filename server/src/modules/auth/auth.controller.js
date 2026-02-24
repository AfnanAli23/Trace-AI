const authService = require("./auth.service");

class AuthController {
	async register(req, res) {
		try {
			const result = await authService.register(req.body);

			res.status(201).json({
				message: "User registered successfully",
				data: result,
			});
		} catch (err) {
			console.log(err);
		}
	}

	async login(req, res) {
		try {
			const result = await authService.login(req.body);

			res.cookie("token", result.token);

			res.status(201).json({
				message: "Login Successfull",
				data: result,
			});
		} catch (err) {
			console.log(err);
		}
	}

	async profile(req, res) {
		try {
			const user = await authService.getProfile(req.user.id);

			res.status(200).json({
				data: user,
			});
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = new AuthController();

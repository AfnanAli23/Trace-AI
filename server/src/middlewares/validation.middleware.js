const { validationResult } = require("express-validator");

module.exports = (validations) => {
	return async (req, res, next) => {
		try {
			// Run all validations
			await Promise.all(validations.map((validation) => validation.run(req)));

			const errors = validationResult(req);

			if (errors.isEmpty()) {
				return next();
			}

			return res.status(400).json({
				success: false,
				message: "Validation Error",
				errors: errors.array(),
			});
		} catch (err) {
			next(err);
		}
	};
};

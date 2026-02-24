exports.errorHandler = (err, req, res, next) => {
	console.error("🔥 ERROR:", err);

	let statusCode = err.statusCode || 500;
	let message = err.message || "Internal Server Error";

	// MongoDB duplicate key error
	if (err.code === 11000) {
		statusCode = 400;
		message = "Duplicate field value entered";
	}

	// Mongoose validation error
	if (err.name === "ValidationError") {
		statusCode = 400;
		message = Object.values(err.errors)
			.map((val) => val.message)
			.join(", ");
	}

	return res.status(statusCode).json({
		success: false,
		message,
	});
};

require("dotenv").config();

module.exports = {
	BACKEND_PORT: process.env.BACKEND_PORT || 5000,
	BACKEND_URL: process.env.BACKEND_URL,
	FRONTEND_PORT: process.env.FRONTEND_PORT || 3000,
	FRONTEND_URL: process.env.FRONTEND_URL,
	MONGO_URI: process.env.MONGO_URI,
	JWT_SECRET: process.env.JWT_SECRET,
	OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

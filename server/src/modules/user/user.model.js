const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
	},
	{ timestamps: true },
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

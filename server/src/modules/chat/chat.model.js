const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
	{
		bug: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Bug",
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		messages: [
			{
				role: {
					type: String,
					enum: ["user", "assistant"],
				},
				content: String,
			},
		],
	},
	{ timestamps: true },
);

const chatModel = mongoose.model("chat", chatSchema);

module.exports = chatModel;

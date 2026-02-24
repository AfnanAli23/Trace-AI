const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},

		description: String,
		stackTrace: String,
		logs: String,
		screenshot: String,

		status: {
			type: String,
			enum: ["open", "in-progress", "resolved", "closed"],
			default: "open",
		},

		priority: {
			type: String,
			enum: ["low", "medium", "high", "critical"],
			default: "medium",
		},

		module: String,

		aiSummary: String,
		aiRootCause: String,
		aiSuggestedFix: String,

		embedding: {
			type: [Number],
			default: [],
		},

		reporter: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},

		assignedTo: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},
	},
	{ timestamps: true },
);

const bugModel = mongoose.model("bug", bugSchema);

module.exports = bugModel;

const aiService = require("./ai.service");

class PriorityService {
	async predictPriority({ title, description, stackTrace }) {
		const prompt = `
You are a senior software engineer.

Classify the bug priority into one of:

critical
high
medium
low

Bug Title:
${title}

Description:
${description}

Stack Trace:
${stackTrace || "N/A"}

Only return one word.
`;

		const response = await aiService.analyzeText(prompt);

		const priority = response.toLowerCase().trim();

		const allowed = ["critical", "high", "medium", "low"];

		if (!allowed.includes(priority)) return "medium";

		return priority;
	}
}

module.exports = new PriorityService();

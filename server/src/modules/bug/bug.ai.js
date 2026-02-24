const aiService = require("../../services/ai.service");

exports.analyzeBug = async ({ description, stackTrace, logs }) => {
	const prompt = `
You are a senior software engineer.

Analyze this bug and return JSON:

{
  "summary": "",
  "rootCause": "",
  "suggestedFix": "",
  "priority": ""
}

Bug Description:
${description}

Stack Trace:
${stackTrace}

Logs:
${logs}
`;

	const response = await aiService.generateText(prompt);

	try {
		return JSON.parse(response);
	} catch {
		return {
			summary: "AI parsing failed",
			rootCause: "",
			suggestedFix: "",
			priority: "medium",
		};
	}
};

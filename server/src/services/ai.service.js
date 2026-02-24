const OpenAI = require("openai");

const client = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

class AIService {
	async generateText(prompt) {
		const response = await client.responses.create({
			model: "gpt-4.1-mini",
			input: prompt,
		});

		return response.output_text;
	}

	async generateEmbedding(text) {
		const response = await client.embeddings.create({
			model: "text-embedding-3-small",
			input: text,
		});

		return response.data[0].embedding;
	}

	async analyzeText(prompt) {
		const response = await openai.chat.completions.create({
			model: "gpt-4.1-mini",
			messages: [
				{
					role: "user",
					content: prompt,
				},
			],
		});

		return response.choices[0].message.content;
	}
}

module.exports = new AIService();

/*
const openai = require("../config/openai");

class AIService {
  async analyzeBug({ description, stackTrace, logs }) {
    const prompt = `
You are a senior software engineer.

Analyze the bug report and provide:

1. Summary
2. Root Cause
3. Suggested Fix
4. Priority (low, medium, high, critical)

Bug Description:
${description}

Stack Trace:
${stackTrace || "N/A"}

Logs:
${logs || "N/A"}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = response.choices[0].message.content;

    return {
      summary: text,
      rootCause: text,
      suggestedFix: text,
      priority: "medium",
    };
  }

  async generateEmbedding(text) {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    return response.data[0].embedding;
  }
}

module.exports = new AIService();
*/

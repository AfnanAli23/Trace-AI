const aiService = require("../../services/ai.service");

exports.askAI = async ({ message, bugContext }) => {
	const prompt = `
You are a senior software engineer helping debug an issue.

Bug Context:
${JSON.stringify(bugContext, null, 2)}

User Question:
${message}
`;

	const response = await aiService.generateText(prompt);

	return response;
};

/*
const Chat = require("./chat.model");
const bugModel = require("../bug/bug.model");
const aiService = require("../../services/ai.service");

class ChatService {
  async askQuestion({ bugId, question, userId }) {
    const bug = await bugModel.findById(bugId);

    if (!bug) {
      throw new Error("Bug not found");
    }

    let chat = await Chat.findOne({ bug: bugId, user: userId });

    if (!chat) {
      chat = await Chat.create({
        bug: bugId,
        user: userId,
        messages: [],
      });
    }

    const context = `
You are a senior software engineer helping debug an issue.

Bug Title: ${bug.title}
Description: ${bug.description}

Stack Trace:
${bug.stackTrace || "N/A"}

Logs:
${bug.logs || "N/A"}

AI Root Cause:
${bug.aiRootCause || "N/A"}

User Question:
${question}
`;

    const aiResponse = await aiService.analyzeText(context);

    chat.messages.push(
      { role: "user", content: question },
      { role: "assistant", content: aiResponse }
    );

    await chat.save();

    return {
      answer: aiResponse,
      chat,
    };
  }

  async getChatHistory(bugId, userId) {
    return Chat.findOne({ bug: bugId, user: userId });
  }
}

module.exports = new ChatService();
*/

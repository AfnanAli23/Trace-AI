const chatService = require("./chat.service");

exports.ask = async (req, res, next) => {
	try {
		const { message, bugContext } = req.body;

		const reply = await chatService.askAI({
			message,
			bugContext,
		});

		return res.json({ reply });
	} catch (err) {
		next(err);
	}
};

/*
const chatService = require("./chat.service");

class ChatController {
  async ask(req, res, next) {
    try {
      const { bugId, question } = req.body;

      const result = await chatService.askQuestion({
        bugId,
        question,
        userId: req.user.id,
      });

      res.json({
        success: true,
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  async history(req, res, next) {
    try {
      const { bugId } = req.params;

      const chat = await chatService.getChatHistory(
        bugId,
        req.user.id
      );

      res.json({
        success: true,
        data: chat,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ChatController();
*/

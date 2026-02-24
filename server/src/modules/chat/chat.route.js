const router = require("express").Router();

const chatController = require("./chat.controller");
const { authenticate } = require("../../middlewares/auth.middleware");

/**
--> Chat Home Route
--> POST /api/chat/
 */
router.post("/", authenticate, chatController.ask);

module.exports = router;

/*
const router = require("express").Router();
const controller = require("./chat.controller");
const auth = require("../../middleware/auth.middleware");

router.post("/ask", auth, controller.ask);
router.get("/history/:bugId", auth, controller.history);

module.exports = router;
*/

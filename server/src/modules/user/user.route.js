const router = require("express").Router();

const userController = require("./user.controller");
const { authenticate } = require("../../middlewares/auth.middleware");

/**
--> User Home Route
--> GET /api/users/
 */
router.get("/", authenticate, userController.getUsers);

/**
--> User Me Route
--> GET /api/users/me
 */
router.get("/me", authenticate, userController.getProfile);

module.exports = router;

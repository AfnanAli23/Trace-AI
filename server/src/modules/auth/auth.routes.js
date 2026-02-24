const express = require("express");
const router = express.Router();

const authController = require("./auth.controller");
const { authenticate } = require("../../middlewares/auth.middleware");

/**
--> Auth Register Route
--> POST /api/auth/register
 */
router.post("/register", authController.register);

/**
--> Auth Login Route
--> POST /api/auth/login
 */
router.post("/login", authController.login);

/**
--> Auth Get Profile Route
--> GET /api/auth/profile
 */
router.get("/profile", authenticate, authController.profile);

module.exports = router;

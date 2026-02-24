const express = require("express");
const router = express.Router();

const bugController = require("./bug.controller");
const validate = require("../../middlewares/validation.middleware");
const { createBug } = require("./bug.validation");
const { authenticate } = require("../../middlewares/auth.middleware");

/**
--> Bug Create Route
--> POST /api/bugs/
 */
router.post("/", authenticate, validate(createBug), bugController.create);

/**
--> Bug Get Route
--> GET /api/bugs/
 */
router.get("/", authenticate, bugController.getAll);

/**
--> Bug: Getting Bug By Id Route
--> GET /api/bugs/:id
 */
router.get("/:id", authenticate, bugController.getOne);

/**
--> Bug: Updating Bug By Id Route
--> PUT /api/bugs/:id
 */
router.put("/:id", authenticate, bugController.update);

/**
--> Bug: Deleting Bug By Id Route
--> DELETE /api/bugs/:id
 */
router.delete("/:id", authenticate, bugController.delete);

module.exports = router;

const { body } = require("express-validator");

exports.createBug = [
	body("title").notEmpty().withMessage("Title required"),
	body("description").notEmpty().withMessage("Description required"),
];

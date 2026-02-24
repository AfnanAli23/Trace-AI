const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, uniqueName + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	const allowed = ["image/png", "image/jpg", "image/jpeg", "text/plain"];

	if (allowed.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(new Error("Invalid file type"), false);
	}
};

const upload = multer({
	storage,
	fileFilter,
});

module.exports = upload;

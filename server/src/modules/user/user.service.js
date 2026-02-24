const userModel = require("./user.model");

exports.getProfile = async (userId) => {
	return userModel.findById(userId).select("-password");
};

exports.getAllUsers = async () => {
	return userModel.find().select("-password");
};

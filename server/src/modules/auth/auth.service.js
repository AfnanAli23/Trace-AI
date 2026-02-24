const userModel = require("../user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateToken(user) {
	return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});
}

class AuthService {
	async register(data) {
		const { name, email, password } = data;

		const existingUser = await userModel.findOne({ email });
		if (existingUser) {
			throw new Error("User already exists");
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await userModel.create({
			name,
			email,
			password: hashedPassword,
		});

		const token = generateToken(user);

		return { user, token };
	}

	async login(data) {
		const { email, password } = data;

		const user = await userModel.findOne({ email });
		if (!user) {
			throw new Error("Invalid Credentials");
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			throw new Error("Invalid Credentials");
		}

		const token = generateToken(user);

		return { user, token };
	}

	async getProfile(userId) {
		const user = await userModel.findById(userId).select("-password");
		return user;
	}
}

module.exports = new AuthService();

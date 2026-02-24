require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

/**
--> Basic Setup
 */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

/**
--> Requring Routes
 */
const authRoute = require("./modules/auth/auth.routes");
const bugRoute = require("./modules/bug/bug.route");
const dashboardRoute = require("./modules/dashboard/dashboard.route");
const userRoute = require("./modules/user/user.route");
const chatRoute = require("./modules/chat/chat.route");

/**
--> Error Middleware
 */
const { errorHandler } = require("./middlewares/error.middleware");

/** Backend Home Route */
app.get("/", (req, res) => {
	res.send("TraceAI API Running 🚀");
});

/**
 --> Auth Route
 */
app.use("/api/auth", authRoute);
/**
--> Bug Route
 */
app.use("/api/bugs", bugRoute);
/**
--> Dashboard Route
 */
app.use("/api/dashboard", dashboardRoute);
/**
 --> User Route
 */
app.use("/api/users", userRoute);
/**
--> Chat Route
 */
app.use("/api/chat", chatRoute);

// Error Handling
app.use(errorHandler);

module.exports = app;

const express = require("express");
const router = express.Router();

const dashboardController = require("./dashboard.controller");
const { authenticate } = require("../../middlewares/auth.middleware");

/**
--> Dashboard Overview Route
--> GET /api/dashboard/overview
 */
router.get("/overview", authenticate, dashboardController.overview);

/**
--> Dashboard Status Route
--> GET /api/dashboard/status
 */
router.get("/status", authenticate, dashboardController.statusStats);

/**
--> Dashboard Priority Route
--> GET /api/dashboard/priority
 */
router.get("/priority", authenticate, dashboardController.priorityStats);

/**
--> Dashboard Modules Route
--> GET /api/dashboard/modules
 */
router.get("/modules", authenticate, dashboardController.modules);

/**
--> Dashboard Resolution-time Route
--> GET /api/dashboard/resolution-time
 */
router.get("/resolution-time", authenticate, dashboardController.resolution);

/**
--> Dashboard Trend Route
--> GET /api/dashboard/trend
 */
router.get("/trend", authenticate, dashboardController.trend);

module.exports = router;

const express = require("express");
const analyticsController = require("./../controllers/analyticsController");
const authController = require("./../controllers/authController");
const userInsightsController=require("./../controllers/userInsightsController");


const router = express.Router();

router
  .route("/admin-stats")
  .get(authController.protect, authController.restrictTo("admin"), analyticsController.getAnalytics);

router
  .route("/my-activity")
  .get(authController.protect, analyticsController.getUserActivity);

  router.get("/most-visited-locations",authController.protect,analyticsController.getUserMostVisitedLocations);

  router.get("/user-posting-trends",authController.protect,analyticsController.getUserPostingTrends);

  router.get(`/user-insights`,authController.protect,userInsightsController.getUserInsights);

module.exports = router;

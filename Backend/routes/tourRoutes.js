const express = require("express");
const router = express.Router();
const tourController = require("./../controllers/tourController");
const authController = require("./../controllers/authController");
router
  .route("/")
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    tourController.createTour
  );

router
  .route(`/:id`)
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    tourController.deleteTour
  );

module.exports = router;

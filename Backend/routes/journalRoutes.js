const express = require("express");
const router = express.Router();
const journalController = require("./../controllers/journalController");
const authController = require("./../controllers/authController");
const reviewRouter=require("./reviewRoutes");


router.use(`/:journalId/reviews`,reviewRouter);

router
  .route("/")
  .get(journalController.getAllJournals)
  .post(authController.protect, journalController.createJournal);

router
  .route("/admin")
  .get(authController.protect,authController.restrictTo("admin"), journalController.getAdminJournals);

router.get("/top-10-popular",journalController.getPopularJournals);

router.get("/search", journalController.searchJournals);

router
  .route(`/:id`)
  .get(journalController.getJournal)
  .patch(authController.protect, journalController.updateJournal)
  .delete(authController.protect, journalController.deleteJournal);

  router.post("/upload-cover",authController.protect,journalController.uploadCover,journalController.resizeCover);

 

module.exports = router;

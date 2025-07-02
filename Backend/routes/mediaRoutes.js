const express = require("express");
const router = express.Router();
const mediaController = require("./../controllers/mediaController");
const authController = require("./../controllers/authController");
const upload=require("./../utils/multer");

router.get("/journal/:journalId", mediaController.getJournalMedia);

router.use(authController.protect);

router
  .post("/upload/:journalId", upload.single("image"),mediaController.uploadMedia)
  .get("/user", mediaController.getUserMedia)
  .delete("/delete/:mediaId", mediaController.deleteMedia);

module.exports = router;

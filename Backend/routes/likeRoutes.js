const express = require("express");
const router = express.Router();
const likesController = require("./../controllers/likesController");
const authController = require("./../controllers/authController");

router
  .post(
    "/journals/:journalId/like",
    authController.protect,
    likesController.likeJournal
  )
  .get("/journals/:journalId", likesController.getLikes)
  .delete(
    "/journals/:journalId/unlike",
    authController.protect,
    likesController.unlikeJournal
  );


  module.exports=router;
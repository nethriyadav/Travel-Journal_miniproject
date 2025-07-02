const express = require("express");
const router = express.Router();
const commentController = require("./../controllers/commentController");
const authController = require("./../controllers/authController");

router
  .post(
    "/addComment/:journalId",
    authController.protect,
    commentController.addComment
  )
  .get("/:journalId", commentController.getComments)
  .delete(
    "/deleteComment/:commentId",
    authController.protect,
    commentController.deleteComment
  );


  module.exports=router;
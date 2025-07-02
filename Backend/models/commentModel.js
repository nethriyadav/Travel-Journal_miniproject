const mongoose = require('mongoose');

const User=require("./../models/userModel");

const Journal=require("./../models/journalModel");

const commentSchema = new mongoose.Schema(
  {
    journal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Journal",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
   }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports=Comment;

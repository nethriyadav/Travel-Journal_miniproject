const mongoose = require('mongoose');

const User=require("./../models/userModel");
const Journal=require("./../models/journalModel");

const likeSchema = new mongoose.Schema(
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
  },
  { timestamps: true ,
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
  }
);

const Like = mongoose.model("Like", likeSchema);

module.exports=Like;

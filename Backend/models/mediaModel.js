const mongoose = require("mongoose");
const User = require("./../models/userModel");

const MediaSchema = new mongoose.Schema({
  url: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  journalId: { type: mongoose.Schema.Types.ObjectId, ref: "Journal", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Media", MediaSchema);

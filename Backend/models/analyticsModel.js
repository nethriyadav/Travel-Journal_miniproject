const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      enum: ["created", "updated", "deleted", "viewed"],
      required: true,
    },
    targetType: {
      type: String,
      enum: ["journal", "review"],
      required: true,
    },
    targetId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      refPath: "targetType",
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Analytics = mongoose.model("Analytics", analyticsSchema);
module.exports = Analytics;

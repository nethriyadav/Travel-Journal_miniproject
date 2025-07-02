const mongoose = require("mongoose");
const Comment=require("./../models/commentModel");
const Like=require("./../models/likesModel");

const journalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    // location: {
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   description: String,
    //   coordinates: {
    //     type: [Number],
    //     required: true,
    //   },
    //   address: String,
    //   visitDate: Date,
    // },

    location: {
      name: {
        type: String,
        required: true,
      },
      description: String,
      coordinates: {
        type: [Number],
        required: true,
      },
      address: String,
      visitDate: Date,
    },    
    
    media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
    tags:[String],
    story: {
      type: String,
      required: true,
    },
    feelings: {
      type: [String],
      enum: [
        "happy",
        "excited",
        "nostalgic",
        "peaceful",
        "adventurous",
        "amazed",
        "tired",
        "reflective",
      ],
      default: ["peaceful"],
    },
    photos: {
      type: String,
      default: ["default.jpg"],
    },
    isPublic: {
      type: Boolean,
      default: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    ratingsAverage:Number,
    ratingsQuantity:Number,
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

journalSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "journal",
  localField: "_id",
});

journalSchema.virtual("likesCount", {
  ref: "Like",
  foreignField: "journal",
  localField: "_id",
  count: true,  
});

journalSchema.index({ 'location.coordinates': '2dsphere' });

module.exports = mongoose.model("Journal", journalSchema);

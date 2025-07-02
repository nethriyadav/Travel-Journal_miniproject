const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");
const User = require("./userModel");
const { request } = require("express");
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requires: [true, "A tour must have a name"],
      unique: true,
      trim: true,
      maxlength: [
        40,
        "A tour name length should be less than or equals to 40 characters",
      ],
      minlength: [
        10,
        "A tour name length should be greater than or equals to 10 characters",
      ],
    },
    slug: {
      type: String,
      unique: true,
    },
    duration: {
      type: Number,
      required: [true, "A tour must have duration"],
    },
    difficulty: {
      type: String,
      required: ["A tour must have a difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: ["Difficulty is either: easy,medium or difficult"],
      },
    },
    destination: {
      type: String,
      required: [true, "A tour must have a destination"],
    },
    startDate: {
      type: Date,
      required: [true, "A tour must have a start date"],
    },
    endDate: {
      type: Date,
      required: [true, "A tour must have a ending date"],
    },
    rating: {
      type: Number,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have an image cover"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A tour must belongs to a User"],
    },
    locations: [
      {
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
    ],

    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.index({ slug: 1 });

tourSchema.pre("save", function (next) {
  (this.slug = slugify(this.name, { lower: true })), next();
});

tourSchema.pre(/^find/, function (next) {
  this.find({ isPublic: { $ne: false } });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} millisceonds`);
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;

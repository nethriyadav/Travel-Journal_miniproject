const mongoose = require("mongoose");
const Journal = require("./../models/journalModel");
const User = require("./../models/userModel");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review cannot be empty"],
    },
    rating: {
      type: Number,
      required: [true, "rating is required"],
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    journal: {
      type: mongoose.Schema.ObjectId,
      ref: "Journal",
      required: [true, "Review must belongs to a journal"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A Review must belongs to a user"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

  reviewSchema.index({journal:1,user:1},{unique:true});

  reviewSchema.pre(/^find/,function(next){
    this.populate({
      path:"user",
      select:"name photo"
    }).populate({
      path:"journal",
      select:"title",
    });
    next();
  })

  reviewSchema.statics.calAvgRating=async function(journalId)
  {
    const stats=await this.aggregate([
      {$match:{journal:journalId}},
      {
        $group:{
          _id:"$journal",
          avgRating:{$avg:"$rating"},
          numRatings:{$sum:1},
        }
      }
    ])

    if(stats.length>0)
    {
      await Journal.findByIdAndUpdate(journalId,{
        ratingsQuantity:stats[0].numRatings,
        ratingsAverage:stats[0].avgRating,
      })
    }
    else{
      await Journal.findByIdAndUpdate(journalId,{
        ratingsQuantity:0,
        ratingsAverage:0,
      })
    }
  }

  reviewSchema.post("save",async function(){
    await this.constructor.calAvgRating(this.journal);
  })

  reviewSchema.pre(/^findOneAnd/,async function(next){
    this.reviewDoc=await this.findOne();
    next();
  })

  reviewSchema.post(/^findOneAnd/,async function(){
    if(this.reviewDoc)
    await this.reviewDoc.constructor.calAvgRating(this.reviewDoc.journal);
  })

  const Review=mongoose.model("Review",reviewSchema);
  module.exports=Review;



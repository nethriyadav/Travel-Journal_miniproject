const Review = require("./../models/reviewModel");
const catchAsync=require("./../utils/catchAsync")
const AppError=require("./../utils/appError")
const Analytics=require("./../models/analyticsModel")

const factory = require("./handleFactory");

exports.getAllReviews = factory.getAll(Review);

exports.setJournalIds = (req, res, next) => {
  if (!req.body.journal) req.body.journal = req.params.journalId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = factory.createOne(Review);
exports.getReview = factory.getOne(Review);




exports.updateReview = catchAsync(async (req, res, next) => {
  const doc = await Review.findById(req.params.id);

  if (!doc) {
      return next(new AppError("No review found with that ID", 404));
  }
  if (doc.user.id.toString() !== req.user.id) {
      return next(new AppError("You are not authorized to update this review", 403));
  }
  const restrictedFields = ["user", "createdAt"];
  Object.keys(req.body).forEach((field) => {
      if (!restrictedFields.includes(field)) {
          doc[field] = req.body[field]; 
      }
  });

  await Analytics.create({
    user: req.user.id,
    action: "updated",
    targetType: "review",
    targetId: doc._id, 
  });

  await doc.save(); 

  res.status(200).json({
      status: "Success",
      data: {
          data: doc,
      },
  });
});



exports.deleteReview=catchAsync(async(req,res,next)=>
{
  doc=await Review.findById(req.params.id);
  if(!doc)
  {
    return next(new AppError("No document found with that Id",404));
  }

  if((doc.user.id.toString()!==req.user.id)&&req.user.role!=="admin")
  {
    return next(new AppError("You are not authorized to delete this review",403));
  }

  await doc.deleteOne();

  await Analytics.create({
    user: req.user.id,
    action: "deleted",
    targetType: "review",
    targetId: doc._id, 
  });

  res.status(204).json({
    status: "Success",
    data: null,
  });
})

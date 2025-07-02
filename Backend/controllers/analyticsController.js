const Analytics = require("../models/analyticsModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Journal = require("./../models/journalModel");
const { default: mongoose } = require("mongoose");

// exports.getAnalytics = catchAsync(async (req, res, next) => {
//   const stats = await Analytics.aggregate([
//     {
//       $group: {
//         _id: { action: "$action", targetType: "$targetType" },
//         count: { $sum: 1 },
//       },
//     },
//   ]);

//   res.status(200).json({
//     status: "Success",
//     results:stats.length,
//     data: stats,
//   });
// });

exports.getAnalytics = catchAsync(async (req, res, next) => {
  const stats = await Analytics.aggregate([
    {
      $group: {
        _id: { action: "$action", targetType: "$targetType", userId: "$user" },
        count: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "users", // Collection name of the User model in your database
        localField: "_id.userId", // field in the analytics collection
        foreignField: "_id", // field in the users collection
        as: "userDetails", // alias for the result
      },
    },
    {
      $unwind: {
        path: "$userDetails",
        preserveNullAndEmptyArrays: true, // To keep actions without associated user info
      },
    },
    {
      $project: {
        _id: 0, // Exclude the original _id field
        action: "$_id.action",
        targetType: "$_id.targetType",
        userId: "$_id.userId",
        userName: { $ifNull: ["$userDetails.name", "Anonymous"] }, // Default to "Anonymous" if no user
        userEmail: { $ifNull: ["$userDetails.email", "N/A"] }, // Default to "N/A" if no email
        count: 1,
      },
    },
  ]);

  res.status(200).json({
    status: "Success",
    results: stats.length,
    data: stats,
  });
});

exports.getUserActivity = catchAsync(async (req, res, next) => {
  const activity = await Analytics.find({ user: req.user.id }).sort(
    "-timestamp"
  );

  res.status(200).json({
    status: "Success",
    results: activity.length,
    data: activity,
  });
});

exports.getUserMostVisitedLocations = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const mostVisitedLocations = await Journal.aggregate([
    {
      $match: { user: new mongoose.Types.ObjectId(userId) },
    },
    {
      $group: { _id: "$location.name", count: { $sum: 1 } },
    },
    { $sort: { count: -1 } },
    {
      $limit: 5,
    },
  ]);

  res.status(200).json({
    status: "Success",
    data: {
      mostVisitedLocations,
    },
  });
});

exports.getUserPostingTrends = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const postingTrends = await Journal.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(userId) } },
    {
      $group: { _id: { month: { $month: "$createdAt" }}, count: { $sum: 1 }  },
    },
    { $sort: { _id: 1 } },
  ]);

  res.status(200).json({
    status: "success",
    data: postingTrends,
  });
});






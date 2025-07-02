const catchAsync = require("./../utils/catchAsync");
const Journal = require("./../models/journalModel");
const Like = require("./../models/likesModel");
const Comment = require("./../models/commentModel");
const { default: mongoose } = require("mongoose");
const Media=require("./../models/mediaModel");

exports.getUserInsights = catchAsync(async (req, res, next) => {
  const userId = req.user.id;


  const mostLikedJournal = await Journal.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(userId) } },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "journal",
        as: "likes",
      },
    },
    { $addFields: { likesCount: { $size: "$likes" } } }, 
    { $sort: { likesCount: -1 } }, 
    { $limit: 1 }, 
    {$project:{title:1,likesCount:1}},
  ]);
  


  const mostCommentedJournal = await Journal.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(userId) } },
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "journal",
        as: "comments",
      },
    },
    { $addFields: { commentsCount: { $size: "$comments" } } }, 
    { $sort: { commentsCount: -1 } }, 
    { $limit: 1 }, 
    {$project:{title:1,commentsCount:-1}},
  ]);
  



  const longestJournal = await Journal.findOne({ user: userId })
    .sort({ story: -1 })
    .select("title");



  // Total Journals
  const totalJournals = await Journal.countDocuments({ user: userId });


  // Total Photos
  const mediaCountAgg = await Media.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    { $count: "total" }
  ]);
  
  const totalPhotos = mediaCountAgg[0]?.total || 0;


  // Days Journeying = difference between first and last journal
  const journals = await Journal.find({ user: userId }).sort("createdAt");
  let daysJourneying = 0;
  if (journals.length > 1) {
    const start = new Date(journals[0].createdAt);
    const end = new Date(journals[journals.length - 1].createdAt);
    daysJourneying = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  }

  // Places Visited (unique location names)
  const locations = await Journal.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(userId) } },
    { $group: { _id: "$location.name" } },
  ]);



  res.status(200).json({
    status: "Success",
    data: {
      totalJournals,
      totalPhotos,
      daysJourneying,
      placesVisited: locations.length,
      mostLikedJournal,
      mostCommentedJournal,
      longestJournal,
    },
  });
});

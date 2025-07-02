const Like=require("./../models/likesModel");

const Journal=require("./../models/journalModel");
const AppError=require("./../utils/appError");
const catchAsync=require("./../utils/catchAsync");
const User=require("./../models/userModel");

exports.likeJournal = catchAsync(async (req, res, next) => {
  const { journalId } = req.params;
  const userId = req.user.id;

  const journal = await Journal.findById(journalId);
  if (!journal) return next(new AppError("No Journal found with this ID", 404));

  const existingLike = await Like.findOne({ journal: journalId, user: userId });
  if (existingLike) return next(new AppError("You already liked this journal", 400));

  await Like.create({ journal: journalId, user: userId });

  await User.findByIdAndUpdate(userId, {
    $addToSet: { likedJournals: journalId }, // Prevents duplicates
  });


  res.status(201).json({ status: "Success", message: "Journal liked" });
});




exports.unlikeJournal = catchAsync(async (req, res, next) => {
  const { journalId } = req.params;
  const userId = req.user.id;

  const like = await Like.findOneAndDelete({ journal: journalId, user: userId });
  if (!like) return next(new AppError("You haven't liked this journal", 400));

  await User.findByIdAndUpdate(userId, {
    $pull: { likedJournals: journalId },
  });

  res.status(200).json({ status: "Success", message: "Journal unliked" });
});




exports.getLikes = catchAsync(async (req, res, next) => {
  const { journalId } = req.params;
  const likes = await Like.countDocuments({ journal: journalId });

  res.status(200).json({
    status: "Success",
    data: { likes },
  });
});


exports.getUserLikedJournals = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("likedJournals");

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }

  res.status(200).json({
    status: "Success",
    data:
    {
      journals:user.likedJournals,
    }
  });
});
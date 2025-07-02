const Comment = require("./../models/commentModel");

const Journal = require("./../models/journalModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.addComment = catchAsync(async (req, res, next) => {
  const { journalId } = req.params;
  const { text } = req.body;
  const userId = req.user.id;

  const journal = await Journal.findById(journalId);
  if (!journal) return next(new AppError("No Journal found with this ID", 404));

  const comment = await Comment.create({
    journal: journalId,
    user: userId,
    text,
  });

  res.status(201).json({
    status: "Success",
    data: { comment },
  });
});

exports.getComments = catchAsync(async (req, res, next) => {
  const { journalId } = req.params;

  const comments = await Comment.find({ journal: journalId }).populate({
    path: "user",
    select: "name",
  });

  res.status(200).json({
    status: "Success",
    data: { comments },
  });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  const { commentId } = req.params;
  const comment = await Comment.findById(commentId);

  if (!comment) return next(new AppError("No Comment found with this ID", 404));
  if (comment.user.toString() !== req.user.id)
    return next(new AppError("Not authorized", 403));

  await comment.deleteOne();

  res.status(204).json({ status: "Success", data: null });
});

const Media = require("./../models/mediaModel");
const Journal = require("./../models/journalModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const path=require("path");
const fs=require("fs");

exports.uploadMedia = catchAsync(async (req, res, next) => {
  const { journalId } = req.params;
  const { url } = req.body;
  const userId = req.user.id;

  const journal = await Journal.findById(journalId);
  if (!journal) {
    return next(new AppError("No Journal found with this id", 404));
  }

  if (!req.file) {
    return next(new AppError("No file uploaded", 400));
  }

  console.log('Received file:', req.file);


  const filePath = `/uploads/${req.file.filename}`;
  const newMedia = await Media.create({ url:filePath, userId, journalId });

  res.status(201).json({
    status: "Success",
    data: {
      media: newMedia,
    },
  });
});

exports.getUserMedia = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const media = await Media.find({ userId });

  res.status(200).json({
    status: "Success",
    data: {
      media,
    },
  });
});

exports.getJournalMedia = catchAsync(async (req, res, next) => {
  const { journalId } = req.params;
  const media = await Media.find({ journalId });

  res.status(200).json({
    status: "Success",
    data: {
      media,
    },
  });
});

exports.deleteMedia = catchAsync(async (req, res, next) => {
  const { mediaId } = req.params;
  const media = await Media.findById(mediaId);

  if (!media) {
    return next(new AppError("No Media found with this id", 404));
  }

  if (media.userId.toString() !== req.user.id) {
    return next(
      new AppError("You are not authorized to delete this Media", 403)
    );
  }

  const filePath = path.join(__dirname, "..", media.url);
  fs.unlink(filePath, (err) => {
    if (err) console.error("Failed to delete file:", err);
  });

  await media.deleteOne();

  res.status(204).json({
    status: "Success",
    data: null,
  });
});

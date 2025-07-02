const AppError = require("./../utils/appError");
const Journal = require("./../models/journalModel");
const catchAsync = require("./../utils/catchAsync");
const APIFeatures = require("./../utils/apiFeatures");
const factory = require("./../controllers/handleFactory");
const sharp = require("sharp");
const multer = require("multer");

// exports.getAdminJournals = factory.getAll(Journal);

exports.getAdminJournals = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(
    Journal.find().populate([
      { path: "user", select: "name photo" },
      { path: "comments", select: "text -journal" },
      { path: "likesCount" },
    ]),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const journals = await features.query;

  res.status(200).json({
    status: "Success",
    requestedAt: req.requestTime,
    results: journals.length,
    data: {
      data: journals,
    },
  });
});

exports.getAllJournals = catchAsync(async (req, res, next) => {
  let filter = { isPublic: true };
  const features = new APIFeatures(
    Journal.find(filter).populate([
      { path: "user", select: "name photo" },
      { path: "comments", select: "text -journal" },
      { path: "likesCount" },
    ]),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const journals = await features.query;
  res.status(200).json({
    status: "Success",
    requestedAt: req.requestTime,
    results: journals.length,
    data: {
      data: journals,
    },
  });
});

exports.getJournal = factory.getOne(Journal, [
  { path: "user", select: "name photo" },
  { path: "comments", select: "text -journal" },
  { path: "likesCount" },
]);

// exports.createJournal = factory.createOne(Journal);


exports.createJournal = catchAsync(async (req, res, next) => {
  const { title, story, feelings, photos, location,isPublic } = req.body;

  // Coordinates validation (optional)
  if (!location || !location.coordinates || location.coordinates.length !== 2) {
    return next(new AppError("Coordinates (longitude and latitude) are required", 400));
  }

  const journal = await Journal.create({
    user: req.user.id,
    title,
    story,
    feelings,
    photos,
    isPublic,
    location: {
      name: location.name,
      description: location.description || "",
      coordinates: location.coordinates, // [lng, lat]
    },
  });

  res.status(201).json({
    status: "Success",
    data: {
      journal,
    },
  });
});



exports.updateJournal = factory.updateOne(Journal);

exports.deleteJournal = factory.deleteOne(Journal);

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new AppError("Not an image. Please upload only images.", 400), false);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadCover = upload.fields([{ name: "photos", maxCount: 1 }]);


exports.resizeCover = catchAsync(async (req, res, next) => {
  if (!req.files || !req.files.photos) return next();

  req.body.photos = `journal-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.files.photos[0].buffer)
    .resize(1200, 800)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/journals/${req.body.photos}`);

    res.status(200).json({
      status: "Success",
      photoUrl: `/img/journals/${req.body.photos}`,
    });

  next();
});


exports.getPopularJournals = catchAsync(async (req, res, next) => {
  const journals = await Journal.find({ isPublic: true })
    .populate([
      { path: "user", select: "name" },
      { path: "comments", select: "text -journal" },
      { path: "likesCount" },
    ])
    .lean();

  const sortedJournals = journals
    .sort((a, b) => b.likesCount - a.likesCount)
    .slice(0, 10);

  res.status(200).json({
    status: "success",
    results: sortedJournals.length,
    data: sortedJournals,
  });
});



// GET /api/journals/search?q=beach
exports.searchJournals = async (req, res) => {
  const { q } = req.query;
  const regex = new RegExp(q, "i");

  const results = await Journal.find({
    $or: [
      { title: regex },
      { "location.name": regex },
      { "location.description": regex },
      { tags: regex }
    ]
  });

  res.status(200).json(results);
};


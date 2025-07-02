const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const APIFeatures = require("./../utils/apiFeatures");
const Analytics = require("./../models/analyticsModel");
const { trusted } = require("mongoose");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that Id", 404));
    }

    if (doc.user.toString() !== req.user.id && req.user.role !== "admin") {
      return next(
        new AppError("You are not authorized to delete this resource", 403)
      );
    }

    await doc.deleteOne();

    res.status(204).json({
      status: "Success",
      data: null,
    });
  });

exports.deleteUser = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(204).json({
      status: "success  ",
      data: null,
    });
  });

exports.updateUser = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
 
    if (!doc) {
      return next(new AppError("No document found with that id", 404));
    }

    if(req.user.role!=="admin")
    {
      return next(new AppError("You dont have permission to update the user",403));
    }

    const updatedDoc=await Model.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
    })

    console.log(req.requestTime);
    res.status(200).json({
      status: "Success",
      data: {
        data: updatedDoc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that id", 404));
    }

    if (doc.user.toString() !== req.user.id && req.user.role !== "admin") {
      return next(
        new AppError("You are not authorized to update this resource", 403)
      );
    }

    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    const targetType = Model.modelName.toLowerCase();


    await Analytics.create({
      user: req.user.id,
      action: "updated",
      targetType: targetType,
      targetId: doc._id, 
    });

    console.log(req.requestTime);

    res.status(200).json({
      status: "Success",
      data: {
        data: updatedDoc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (Model.schema.paths.user) req.body.user = req.user.id;

    const doc = await Model.create(req.body);
    const targetType = Model.modelName.toLowerCase();

    await Analytics.create({
      user: req.user.id,
      action: "created",
      targetType: targetType,
      targetId: doc._id, 
    });

    res.status(201).json({
      status: "Success",
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if (!doc) {
      return next(new AppError("No document Found with that id", 404));
    }
    
    let shareableLink = null;
    if (Model.modelName === "Journal" && doc.isPublic) {
      shareableLink = `${req.protocol}://${req.get("host")}/api/v1/journals/${doc._id}`;
    }

    const targetType = Model.modelName.toLowerCase();

   if((req.user&&targetType!=="user"))
   {
    console.log(`This is Journal : `,req.user);
    await Analytics.create({
      user: req.user.id,
      action: "viewed",
      targetType: targetType,
      targetId: doc._id, 
    });
   }

    res.status(200).json({
      status: "Success",
      data: {
        data:{
          ...doc.toObject(),shareableLink,
        }
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.journalId) filter = { journal: req.params.journalId };
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.query;
    res.status(200).json({
      status: "Success",
      requestedAt: req.requestTime,
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

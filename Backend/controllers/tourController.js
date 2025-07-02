const AppError=require("./../utils/appError");
const Tour=require("./../models/tourModel");
const catchAsync=require("./../utils/catchAsync");
const factory=require("./../controllers/handleFactory");

exports.getAllTours=factory.getAll(Tour);

exports.getTour=factory.getOne(Tour);

exports.createTour=factory.createOne(Tour);

exports.updateTour=factory.updateOne(Tour);

exports.deleteTour=factory.deleteOne(Tour);



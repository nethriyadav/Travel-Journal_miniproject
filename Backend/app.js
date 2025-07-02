console.log("Hello from the server side");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const path=require("path");

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://travel-journal-frontend.onrender.com',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
  })
);


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(express.static(path.join(__dirname, 'public')));



const authRouter = require("./routes/authRoutes");
const tourRouter = require("./routes/tourRoutes");
const entryRouter = require("./routes/entryRoutes");
const userRouter = require("./routes/userRoutes");
const journalRouter = require("./routes/journalRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const analyticsRouter=require("./routes/analyticsRoutes");
const mediaRouter=require("./routes/mediaRoutes");
const commentRouter=require("./routes/commentRoutes");
const likesRouter=require("./routes/likeRoutes");


app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/entries", entryRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/journals", journalRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/user/analytics",analyticsRouter);
app.use("/api/v1/media",mediaRouter);
app.use("/api/v1/comments",commentRouter);
app.use("/api/v1/likes",likesRouter);


app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello from the server side!", app: "Travel-Journal" });
});


app.all(`*`, (req, res, next) => {
  // const err=new Error(`Can't find the ${req.originalUrl} in the server!`);
  // err.status="fail";
  // err.statusCode=404;
  // next(err);

  next(new AppError(`Can't find the ${req.originalUrl} in the server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

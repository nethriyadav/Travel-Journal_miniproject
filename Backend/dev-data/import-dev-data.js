const dotenv = require("dotenv");
const fs = require("fs");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./../models/userModel");
const Journal = require("./../models/journalModel");
const Review = require("./../models/reviewModel");

// Load environment variables
dotenv.config({ path: "./config.env" });

// Connect to MongoDB
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);

mongoose
  .connect(DB, {
    tlsAllowInvalidCertificates: true,
  })
  .then(() => console.log("✅ DB connection is successful"))
  .catch((err) => console.error("❌ Error in connecting:", err));

// Read users JSON
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));

//IMPORT DATA IN TO DATABASE
const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    // await Review.create(reviews);
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    // await Tour.deleteMany();
    await User.deleteMany();
    // await Review.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
// Command line arguments
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

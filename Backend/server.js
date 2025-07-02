const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT||3000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);

mongoose
  .connect(DB, {
    tlsAllowInvalidCertificates: true,
  })
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log("Error in connecting " + err);
  });


const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

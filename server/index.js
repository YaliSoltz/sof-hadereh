const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config()
const {
  lecture,
  consultation,
  homeVisit,
  article,
  reading,
  sharing,
  bio,
  login,
  user,
  sentence,
} = require("./routes"); // all the routes


mongoose.set("strictQuery", true);
const app = express();
const port = 4001;

app.use(cors());
app.use(express.json({limit:'20mb'}));
app.use(morgan("tiny"));
console.log(process.env.CLOUD_NAME)

mongoose // connection to the database
  .connect(
    "mongodb+srv://yalisoltz:sof-hadereh@sof-hadereh.v1c3byb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("database failed to connect"));

app.use("/api/lectures", lecture); //show the lecture route
app.use("/api/consultations", consultation); //show the consultation route
app.use("/api/homeVisits", homeVisit); //show the homeVisit route
app.use("/api/articles", article); //show the article route
app.use("/api/readings", reading); //show the reading route
app.use("/api/sharings", sharing); //show the sharing route
app.use("/api/sentences", sentence); //show the sentence route
app.use("/api/bio", bio); //show the bio route
app.use("/api/users", user); //show the user route
app.use("/login", login); //show the login route

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

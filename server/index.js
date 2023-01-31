const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const lecture = require("./routes/lecture");

mongoose.set("strictQuery", false);
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/sof-hadereh")
  .then(() => console.log("database connected successfully"))
  .catch(() => console.log("database failed to connect"));

app.use("/api/lectures", lecture);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

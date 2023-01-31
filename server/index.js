const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const lecture = require("./routes/lecture");

mongoose.set("strictQuery", false);
const app = express();
const port = 4040;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://yalisoltz:sof-hadereh@sof-hadereh.v1c3byb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("database connected successfully"))
  .catch(() => console.log("database failed to connect"));

app.use("/api/lectures", lecture);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

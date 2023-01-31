const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  lecture,
  consultation,
  homeVisit,
  article,
  reading,
  sharing,
  bio,
} = require("./routes");

mongoose.set("strictQuery", true);
const app = express();
const port = 4040;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://yalisoltz:sof-hadereh@sof-hadereh.v1c3byb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("database failed to connect"));

app.use("/api/lectures", lecture);
app.use("/api/consultations", consultation);
app.use("/api/homeVisits", homeVisit);
app.use("/api/articles", article);
app.use("/api/readings", reading);
app.use("/api/sharings", sharing);
app.use("/api/bio", bio);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

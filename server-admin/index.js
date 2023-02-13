const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { contactUs, personalSharing } = require("./routes");

mongoose.set("strictQuery", true);
const app = express();
const port = 10000;

app.use(cors());
app.use(express.json());

mongoose // connection to the database
  .connect(
    "mongodb+srv://yalisoltz:yalisoltz@admin-management.olnorje.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("database failed to connect"));

app.use("/api/contactUs", contactUs); //show the contactUs route
app.use("/api/personalSharings", personalSharing); //show the personalSharing route

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

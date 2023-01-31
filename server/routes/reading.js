const { Router } = require("express");
const { addNewReading, getAllReadings, deleteReading, changeReading } = require("../controllers/reading");
const router = Router();

// get all the readings
router.get("/", getAllReadings);

// add new reading
router.post("/", addNewReading);

// change reading
router.patch("/:id", changeReading);

// delete reading by id
router.delete("/:id", deleteReading);

module.exports = router;

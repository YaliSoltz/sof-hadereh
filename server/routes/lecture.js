const { Router } = require("express");
const {
  addNewLecture,
  getAllLectures,
  deleteLecture,
  changeLecture,
} = require("../controllers/lecture");
const auth = require("../middleware/auth");
const router = Router();

// get all the lectures
router.get("/", getAllLectures);

// add new lecture
router.post("/", auth, addNewLecture);

// change lecture
router.patch("/:id", changeLecture);

// delete lecture by id
router.delete("/:id", deleteLecture);

module.exports = router;

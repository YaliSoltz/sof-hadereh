const { Lecture, joiSchema } = require("../model/lecture");

// get all the lectures
const getAllLectures = async (req, res) => {
  const lectures = await Lecture.find();
  res.status(200).send(lectures);
};

// add new lecture
const addNewLecture = async (req, res) => {
  const body = req.body;
  const { title, content, imgUrl } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let lecture = new Lecture({
    title,
    content,
    imgUrl,
  });
  try {
    lecture = await lecture.save();
    res.status(201).send(lecture);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// change lecture
const changeLecture = async (req, res) => {};

// delete lecture by id
const deleteLecture = async (req, res) => {
  const id = req.params.id;
  await Lecture.findByIdAndDelete(id);
  res.status(201).send("deleted");
};

module.exports = {
  getAllLectures,
  addNewLecture,
  changeLecture,
  deleteLecture,
};

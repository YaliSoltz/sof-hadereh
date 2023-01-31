const { Bio, joiSchema } = require("../model/bio");

// get  bio
const getBio = async (req, res) => {
  const bio = await Bio.find();
  res.status(200).send(bio);
};

// add new bio
const addNewBio = async (req, res) => {
  const body = req.body;
  const { title, content, imgUrl } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let bio = new Bio({
    title,
    content,
    imgUrl,
  });
  try {
    bio = await bio.save();
    res.status(201).send(bio);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// change bio
const changeBio = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (Object.keys(body).length === 0)
    return res.status(400).send("must contain value");

  const { title, content, imgUrl } = body;
  try {
    const bio = await Bio.updateOne(
      { _id: id },
      { $set: { title, content, imgUrl } }
    );
    res.status(201).send(bio);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete bio by id
const deleteBio = async (req, res) => {
  const id = req.params.id;
  await Bio.findByIdAndDelete(id);
  res.status(201).send("deleted");
};

module.exports = {
  getBio,
  addNewBio,
  changeBio,
  deleteBio,
};

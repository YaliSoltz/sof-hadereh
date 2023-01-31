const { Sharing, joiSchema } = require("../model/sharing");

// get all the sharings
const getAllSharings = async (req, res) => {
  const sharing = await Sharing.find();
  res.status(200).send(sharing);
};

// add new sharing
const addNewSharing = async (req, res) => {
  const body = req.body;
  const { firstName, lastName, age, content, imgUrl } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let sharing = new Sharing({
    firstName,
    lastName,
    age,
    content,
    imgUrl,
  });
  try {
    sharing = await sharing.save();
    res.status(201).send(sharing);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// change sharing
const changeSharing = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (Object.keys(body).length === 0)
    return res.status(400).send("must contain value");

  const { firstName, lastName, age, content, imgUrl } = body;
  try {
    const sharing = await Sharing.updateOne(
      { _id: id },
      { $set: { firstName, lastName, age, content, imgUrl } }
    );
    res.status(201).send(sharing);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete Sharing by id
const deleteSharing = async (req, res) => {
  const id = req.params.id;
  await Sharing.findByIdAndDelete(id);
  res.status(201).send("deleted");
};

module.exports = {
  getAllSharings,
  addNewSharing,
  changeSharing,
  deleteSharing,
};

const { Reading, joiSchema } = require("../model/reading");

// get all the readings
const getAllReadings = async (req, res) => {
  const reading = await Reading.find();
  res.status(200).send(reading);
};

// add new reading
const addNewReading = async (req, res) => {
  const body = req.body;
  const { category, name, author } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let reading = new Reading({
    category,
    name,
    author,
  });
  try {
    reading = await reading.save();
    res.status(201).send(reading);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// change reading
const changeReading = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (Object.keys(body).length === 0)
    return res.status(400).send("must contain value");


    
  const { category, name, author } = body;
  try {
    const reading = await Reading.updateOne(
      { _id: id },
      { $set: { category, name, author } }
    );
    res.status(201).send(reading);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete reading by id
const deleteReading = async (req, res) => {
  const id = req.params.id;
  await Reading.findByIdAndDelete(id);
  res.status(201).send("deleted");
};

module.exports = {
  getAllReadings,
  addNewReading,
  changeReading,
  deleteReading,
};

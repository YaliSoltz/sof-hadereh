const { HomeVisit, joiSchema } = require("../model/homeVisit");

// get all the homeVisits
const getAllHomeVisits = async (req, res) => {
  const homeVisit = await HomeVisit.find();
  res.status(200).send(homeVisit);
};

// add new homeVisithomeVisit
const addNewHomeVisit = async (req, res) => {
  const body = req.body;
  const { title, content, imgUrl } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let homeVisithomeVisit = new HomeVisit({
    title,
    content,
    imgUrl,
  });
  try {
    homeVisithomeVisit = await homeVisithomeVisit.save();
    res.status(201).send(homeVisithomeVisit);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// change homeVisit
const changeHomeVisit = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (Object.keys(body).length === 0)
    return res.status(400).send("must contain value");


    
  const { title, content, imgUrl } = body;
  try {
    const homeVisit = await HomeVisit.updateOne(
      { _id: id },
      { $set: { title, content, imgUrl } }
    );
    res.status(201).send(homeVisit);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete HomeVisit by id
const deleteHomeVisit = async (req, res) => {
  const id = req.params.id;
  await HomeVisit.findByIdAndDelete(id);
  res.status(201).send("deleted");
};

module.exports = {
  getAllHomeVisits,
  addNewHomeVisit,
  changeHomeVisit,
  deleteHomeVisit,
};

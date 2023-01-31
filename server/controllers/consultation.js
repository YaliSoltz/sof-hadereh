const { Consultation, joiSchema } = require("../model/consultation");

// get all the Consultations
const getAllConsultations = async (req, res) => {
  const consultations = await Consultation.find();
  res.status(200).send(consultations);
};

// add new Consultation
const addNewConsultation = async (req, res) => {
  const body = req.body;
  const { title, content, imgUrl } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let consultation = new Consultation({
    title,
    content,
    imgUrl,
  });
  try {
    consultation = await consultation.save();
    res.status(201).send(consultation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// change Consultation
const changeConsultation = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (Object.keys(body).length === 0)
    return res.status(400).send("must contain value");

  const { title, content, imgUrl } = body;
  try {
    const consultation = await Consultation.updateOne(
      { _id: id },
      { $set: { title, content, imgUrl } }
    );
    res.status(201).send(consultation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete Consultation by id
const deleteConsultation = async (req, res) => {
  const id = req.params.id;
  await Consultation.findByIdAndDelete(id);
  res.status(201).send("deleted");
};

module.exports = {
  getAllConsultations,
  addNewConsultation,
  changeConsultation,
  deleteConsultation,
};

const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  title: {
    type: String,
    min: 3,
    required: true,
  },
  content: {
    type: String,
    min: 3,
    required: true,
  },
  imgUrl: {
    type: String,
    min: 3,
    required: true,
  },
});

const Bio = mongoose.model("Bio", schema);

// joi schema
const joiSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
  imgUrl: Joi.string().min(3).required(),
});

module.exports = { Bio, joiSchema };

const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  category: {
    type: String,
    min: 3,
    required: true,
  },
  name: {
    type: String,
    min: 3,
    required: true,
  },
  author: {
    type: String,
    min: 3,
    required: true,
  },
});

const Reading = mongoose.model("Reading", schema);

// joi schema
const joiSchema = Joi.object({
  category: Joi.string().min(3).required(),
  name: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
});

module.exports = { Reading, joiSchema };

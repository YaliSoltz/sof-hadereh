const mongoose = require("mongoose");
const Joi = require("joi");
const { min } = require("lodash");

// mongoose schema
const schema = new mongoose.Schema({
    firstName: {
    type: String,
    min: 3,
    required: true,
  },
  lastName: {
    type: String,
    min: 3,
    required: true,
  },
  age: {
    type: String,
    min: 1,
    max: 3,
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

const Sharing = mongoose.model("Sharing", schema);

// joi schema
const joiSchema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    age: Joi.string().min(1).max(3).required(),
    content: Joi.string().min(3).required(),
    imgUrl: Joi.string().min(3).required(),
});

module.exports = { Sharing, joiSchema };

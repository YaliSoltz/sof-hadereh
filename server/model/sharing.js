const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  name: {
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
  city: {
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

// wrapper of the Mongoose schema
const Sharing = mongoose.model("Sharing", schema);

// joi schema
const joiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.string().min(1).max(3).required(),
  city: Joi.string().min(1).max(3).required(),
  content: Joi.string().min(3).required(),
  imgUrl: Joi.string().min(3).required(),
});

module.exports = { Sharing, joiSchema };

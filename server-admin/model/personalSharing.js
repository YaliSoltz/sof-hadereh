const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
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
});

// wrapper of the Mongoose schema
const PersonalSharing = mongoose.model("PersonalSharing", schema);

// joi schema
const joiSchema = Joi.object({
  name: Joi.string().min(3),
  age: Joi.string().min(1).max(3).required(),
  city: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
});

module.exports = { PersonalSharing, joiSchema };

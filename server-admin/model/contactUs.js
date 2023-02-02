const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    required: true,
  },
  phoneNumber: {
    type: String,
    min: 3,
    required: true,
  },
  email: {
    type: String,
    min: 3,
    required: true,
  },
  subject: {
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
const ContactUs = mongoose.model("ContactUs", schema);

// joi schema
const joiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  phoneNumber: Joi.string().min(3).required(),
  email: Joi.string().min(3).required(),
  subject: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
});

module.exports = { ContactUs, joiSchema };

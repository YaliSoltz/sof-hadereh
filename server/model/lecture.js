const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  title: {
    type: String,
    min: 3,
    max: 20,
  },
  body: {
    type: String,
    min: 3,
    max: 20,
  },
});

const Lecture = mongoose.model("Lecture", schema);

// joi schema
const joiSchema = Joi.object({
  title: Joi.string().min(3).max(20),
  body: Joi.string().min(3).max(20),
});

module.exports = { Lecture, joiSchema };

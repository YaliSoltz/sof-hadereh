const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  content: {
    type: String,
    min: 3,
    required: true,
  },
 
});

// wrapper of the Mongoose schema
const Sentence = mongoose.model("Sentence", schema);

// joi schema
const joiSchema = Joi.object({
  content: Joi.string().min(3).required(),
});

module.exports = { Sentence, joiSchema };

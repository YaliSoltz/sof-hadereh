const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  name: {
    type: String,
  max: 55,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 120,
    required: true,
  },
  status: {
    type: String,
    enum: ["רווק", "רווקה", "נשוי", "נשואה", "אלמן", "אלמנה", "גרוש", "גרושה"],
    required: true,
  },
  city: {
    type: String,
    max: 55,
    required: true,
  },
  content: {
    type: String,

    required: true,
  },
});

// wrapper of the Mongoose schema
const Sharing = mongoose.model("Sharing", schema);

// joi schema
const joiSchema = Joi.object({
  name: Joi.string().max(55).required(),
  age: Joi.number().min(1).max(120).required(),
  status: Joi.string().valid("רווק", "רווקה", "נשוי", "נשואה", "אלמן", "אלמנה", "גרוש", "גרושה").required(),
  city: Joi.string().max(55).required(),
  content: Joi.string().required(),
});

module.exports = { Sharing, joiSchema };

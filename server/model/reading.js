const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  category: {
    type: String,
    max: 55,
    required: true,
  },
  imgUrl: {
    type: Object,
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    required: true,
  },
});

// wrapper of the Mongoose schema
const Reading = mongoose.model("Reading", schema);

// joi schema
const joiSchema = Joi.object({
  category: Joi.string().max(55).required(),
  imgUrl: Joi.string().required(),
});

module.exports = { Reading, joiSchema };


const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  title: {
    type: String,
    min: 1,
    max: 55,
    required: true,
  },
  content: {
    type: String,
    min: 1,
    max: 1024,
    required: true,
  },
  imgUrl: {
    type: Object,
    public_id:String,
    url:  String,
    required: true,
  },
});

// wrapper of the Mongoose schema
const Article = mongoose.model("Article", schema);

// joi schema
const joiSchema = Joi.object({
  title: Joi.string().min(1).max(55).required(),
  content: Joi.string().min(1).max(1024).required(),
  imgUrl: Joi.string().required(),
});

module.exports = { Article, joiSchema };
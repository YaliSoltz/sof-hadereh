const mongoose = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");


// mongoose schema
const schema = new mongoose.Schema({
  title: {
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
    public_id:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true
    }
  },
});

// wrapper of the Mongoose schema
const Article = mongoose.model("Article", schema);

// joi schema
const joiSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
  imgUrl: Joi.string().min(3).required(),
});

module.exports = { Article, joiSchema };

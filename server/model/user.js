const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

// mongoose schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    required: true,
  },
  email: {
    type: String,
    min: 1,
    required: true,
  },
  password: {
    type: String,
    min: 3,
    required: true,
  },
  role: {
    type: String,
    min: 3,
    required: true,
  },
});

// wrapper of the Mongoose schema
const User = mongoose.model("User", schema);

// func that takes name + role of the user and generate it to token
function generateJWT(name, role) {
  const token = jwt.sign({ name, role }, "sof-hadereh");
  return token;
}

// joi schema
const joiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().min(3).required(),
});

module.exports = { User, joiSchema, generateJWT };

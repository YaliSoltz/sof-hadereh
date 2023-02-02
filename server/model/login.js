const Joi = require("joi");

// joi schema
const joiSchema = Joi.object({
  email: Joi.string().min(3).required(),
  password: Joi.string().min(3).required(),
});

module.exports = { joiSchema };

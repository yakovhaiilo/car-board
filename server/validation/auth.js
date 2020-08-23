const joi = require("@hapi/joi");


const signupValidation = (data) =>{
    const schema = joi.object({
        name: joi.string()
        .min(2)
        .required(),
        email:
         joi.string()
         .min(6)
         .required()
         .email(),
        password: 
        joi.string()
        .min(6).
        required(),
      });
      return schema.validate(data);
}

const signinValidation = (data) =>{
    const schema = joi.object({
        email:
         joi.string()
         .min(6)
         .required()
         .email(),
        password: 
        joi.string()
        .min(6).
        required(),
      });
      return schema.validate(data);
}

module.exports.signupValidation = signupValidation;
module.exports.signinValidation = signinValidation;
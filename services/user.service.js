const { userSchema } = require("../models");

let register = (body) => {
  return userSchema.create(body);
};

let findByEmail = (email) => {
  return userSchema.findOne({ email });
};

module.exports = { register, findByEmail };

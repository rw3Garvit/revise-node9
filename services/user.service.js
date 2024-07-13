const { userSchema } = require("../models");

let register = (body) => {
  return userSchema.create(body);
};

let findByEmail = (email) => {
  return userSchema.findOne({ email });
};

let getAllUser = () => {
  return userSchema.find();
};

module.exports = { register, findByEmail, getAllUser };

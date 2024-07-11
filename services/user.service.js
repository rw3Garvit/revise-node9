const { userSchema } = require("../models");

let register = (body) => {
  return userSchema.create(body);
};

module.exports = { register };

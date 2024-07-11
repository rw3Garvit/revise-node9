let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

let user = mongoose.model("userSchema", userSchema);

module.exports = user;

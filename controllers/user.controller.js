const { createToken } = require("../middlewares/auth");
const { userService } = require("../services");
const uploadImage = require("../services/cloudnary.service");

let register = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  let body = req.body;
  let { path, originalname } = req.file;

  let cloud = await uploadImage(path, originalname);

  let newBody = {
    ...body,
    profile: cloud.url,
  };

  let user = await userService.register(newBody);

  res.status(201).json({
    message: "user created sucesss",
    user,
  });
};

let login = async (req, res) => {
  try {
    console.log(req.body);
    let { email, password } = req.body;

    let user = await userService.findByEmail(email);
    console.log(user, "result");

    if (!user) {
      throw new Error("user not found");
    }

    if (user.password !== password) {
      throw new Error("password invalid");
    }

    let token = createToken({ user });

    res.cookie("token", token);

    res.status(200).json({
      message: "login success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

let getProfile = async (req, res) => {
  let user = req.user;
  res.status(200).json({ message: "get profile success", user });
};

let getAllUser = async (req, res) => {
  let users = await userService.getAllUser();
  res.status(200).json({ message: "get all user success", users });
};

module.exports = { register, login, getProfile, getAllUser };

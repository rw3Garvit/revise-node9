const { userService } = require("../services");

let register = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  let body = req.body;
  let { path } = req.file;

  let newBody = {
    ...body,
    profile: path,
  };

  let user = await userService.register(newBody);

  res.status(201).json({
    message: "user created sucesss",
    user,
  });
};

module.exports = { register };

let jwt = require("jsonwebtoken");

let createToken = (data) => {
  let token = jwt.sign(data, process.env.SECRET);
  return token;
};

let isLogin = (req, res, next) => {
  try {
    // console.log(req);

    let token = req.cookies["token"];
    if (!token) {
      throw new Error("you are not login");
    }

    let user = jwt.verify(token, process.env.SECRET);

    req.user = user;
    next();

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createToken, isLogin };

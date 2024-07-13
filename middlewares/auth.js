let jwt = require("jsonwebtoken");

let createToken = (data) => {
  let token = jwt.sign(data, process.env.SECRET);
  return token;
};

let isLogin = ([...role]) => {
  try {
   
    return (req, res, next) => {
      let token = req.cookies["token"];
      let user = jwt.verify(token, process.env.SECRET);

      console.log(user.user.role);

      if (!role.includes(user.user.role)) {
        throw new Error("you are unauthorised");
      }
      req.user = user;
      next();
    };
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createToken, isLogin };

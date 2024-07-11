let express = require("express");
let userRoute = require("./user.route");
let routes = express.Router();

routes.use("/user", userRoute);

module.exports = routes;

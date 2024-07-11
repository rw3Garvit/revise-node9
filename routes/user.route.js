let express = require("express");
const { userController } = require("../controllers");
const upload = require("../middlewares/upload");

let route = express.Router();

route.post("/register", upload.single("profile"), userController.register);

module.exports = route;

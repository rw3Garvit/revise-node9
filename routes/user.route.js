let express = require("express");
const { userController } = require("../controllers");
const upload = require("../middlewares/upload");
const { isLogin } = require("../middlewares/auth");

let route = express.Router();

route.post("/register", upload.single("profile"), userController.register);
route.post("/login", userController.login);

route.get("/profile", isLogin(["user", "admin"]), userController.getProfile);
route.get("/getalluser", isLogin(["admin"]), userController.getAllUser);
module.exports = route;

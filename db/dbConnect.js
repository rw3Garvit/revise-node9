let mongoose = require("mongoose");
let dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("db connected sucesss");
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnect;

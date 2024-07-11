require("dotenv").config();
let http = require("http");
let express = require("express");
let cors = require("cors");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");
let app = express();

//for cross plateform
app.use(cors());

//for body
app.use(express.json());

//routes
app.use("/v1", routes);

//database
dbConnect();

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`serve started on ${process.env.PORT}`);
});

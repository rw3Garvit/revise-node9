require("dotenv").config();
let http = require("http");
let express = require("express");
let cors = require("cors");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
let app = express();

//for cross plateform
app.use(cors());

//for body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());

//tamplate engine
app.set("view engine", "ejs");

//routes
app.use("/v1", routes);

app.get("/", (req, res) => {
  res.render("index");
});

//database
dbConnect();

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`serve started on ${process.env.PORT}`);
});

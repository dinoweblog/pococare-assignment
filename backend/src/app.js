const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const authRoute = require("./routes/auth.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use(cookieparser());

app.get("/", function (req, res) {
  res.cookie("hello", "cookie");
  res.send("https://www.geeksforgeeks.org");
});

app.use("/auth", authRoute);

module.exports = app;

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log("Server currently running at " + port);
});
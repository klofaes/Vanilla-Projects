const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
   res.send(`<h1>Hello World</h1>`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log("Server currently running at " + port);
});
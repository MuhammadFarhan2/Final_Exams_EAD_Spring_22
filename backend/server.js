var express = require("express");
var app = express();
bodyParser = require('body-parser'),
path = require('path');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bookmarkDB");
var favourite= require("./model/favourite");
var frequent = require("./model/frequentlyVisited");

const favoriteRouter = require('../backend/routes/favoriteRoute');
const frequentVsitedRouter = require('../backend/routes/frequentVisitedRoute');


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

app.use("/",favoriteRouter)
app.use("/",frequentVsitedRouter)

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    title: 'testing purpose!'
  });
});

app.listen(2000, () => {
  console.log("Server is Runing On port 2000");
});

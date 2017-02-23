//Requires and Global Vars
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var app = express();

//Set & Use Statements
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + "/public"));

//Include external routes
app.use("/teams", require("./controllers/teams"));

//Routes
app.get("/", function(req, res){
  res.render("home");
});

//Listen
app.listen(3000);

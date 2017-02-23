//Requires and global vars
var express = require("express");
var router = express.Router();
var db = require("../models");

//Routes
router.get("/", function(req, res){
  db.team.findAll()
  .then(function(result){
    res.render("allTeams", {teams: result});
  })
  .catch(function(error){
    res.status(404).send("You stink");
  });
});

router.get("/new", function(req, res){
  res.render("newTeam");
});

router.post("/", function(req, res){
  db.team.create(req.body).then(function(newTeam){
    res.redirect("/teams");
  });
});

//Export
module.exports = router;

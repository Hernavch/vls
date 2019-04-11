//var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load login/home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load candidate profile page
  app.get("/can/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Load employer profile page with their info and employer info
  app.get("/emp/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/manager.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};

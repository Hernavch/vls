var db = require("../models");

module.exports = function(app) {
  // Get candidate data for profile page
  app.get("/api/can/:id", function(req, res) {
    db.Candidate.findOne({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
      console.log(results);
    });
  });

  //get employer data for profile page
  app.get("/api/emp/:id", function(req, res) {
    db.Employer.findOne({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
      console.log(results);
    });
  });

  // Create a new candidate
  app.post("/api/candidate", function(req, res) {
    db.Candidate.create(req.body).then(function(dbCan) {
      res.json(dbCan);
    });
  });

  // Create a new employer
  app.post("/api/employer", function(req, res) {
    db.Candidate.create(req.body).then(function(dbEmp) {
      res.json(dbEmp);
    });
  });

  // get all openings for candidate page
  app.get("/api/opening", function(req, res) {
    db.Opening.findAll().then(function(dbOpens) {
      res.json(dbOpens);
    });
  });

  // get all candidates for employer page
  app.get("/api/cans", function(req, res) {
    db.Candidate.findAll().then(function(dbCans) {
      res.json(dbCans);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

// // CANDIDATES POST REQUEST
// app.post("/api/new-candidate", function(req, res) {
//   var data = req.body;
//   console.log(data);
//   // db.
// });
// // EMPOLYERS POST REQUEST
// app.post("/api/new-employer", function(req, res) {
//   var data = req.body;
//   console.log(data);
//   // db.
// });
// // OPENINGS POST REQUEST
// app.post("/api/new-opening", function(req, res) {
//   var data = req.body;
//   console.log(data);
//   // db.
// });

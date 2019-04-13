var db = require("../models");
var request = require("request");
require("dotenv").config();


module.exports = function(app) {
  // Get candidate data for profile page
  app.get("/api/can/:email", function(req, res) {
    db.Candidate.findOne({ where: { email: req.params.email } }).then(function(
      results
    ) {
      res.json(results);
      console.log(results);
    });
  });
  // Get EXTERNAL API
  app.get("/api/get-res", function(req, res) {
    var oneCode = req.query.onecode;
    var zip = req.query.zip;
    // https://api.careeronestop.org/v1/training/pilaTM9XEsBxYkv/29-1141.00/95628/25/0/0/0/0/0/0/0/0/10

    var options = {
      url: encodeURI(
        "https://api.careeronestop.org/v1/training/pilaTM9XEsBxYkv/" +
          oneCode +
          "/" +
          zip +
          "/25/0/0/0/0/0/0/0/0/10"
      ),
      headers: {
        "User-Agent": "request",
        Authorization: process.env.APIKEY,
        Accepts: "application/json"
      }
    };
    console.log(options.url);
    console.log(process.env.APIKEY);
    request(options, function(error, result, body) {
      // console.log(error, result, body);
      res.json(body);
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

  // Create a new opening
  app.post("/api/open", function(req, res) {
    db.Opening.create(req.body).then(function(dbOp) {
      res.json(dbOp);
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

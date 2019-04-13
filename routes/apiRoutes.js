var db = require("../models");

module.exports = function(app) {
  // Get candidate data for profile page
  app.get("/api/can/:username", function(req, res) {
    db.Candidate.findOne({ where: { username: req.params.username } }).then(
      function(results) {
        res.json(results);
        console.log(results);
      }
    );
  });

  //get employer data for profile page
  app.get("/api/emp/:username", function(req, res) {
    db.Employer.findOne({ where: { username: req.params.username } }).then(
      function(results) {
        res.json(results);
        console.log(results);
      }
    );
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

  // Create a new opening and employer
  app.post("/api/opening", function(req, res) {
    console.log("trying to post to db");
    var obj1 = {
      certs_req: req.body.certs_req,
      exp_req: req.body.exp_req,
      certs_pref: req.body.certs_pref,
      exp_pref: req.body.exp_pref,
      position: req.body.position,
      location: req.body.location
    };
    var obj2 = {
      username: req.body.username,
      company: req.body.company,
      email: req.body.email,
      password: req.body.password
    };

    var created = {};
    db.Opening.create(obj1)
      .then(function(result) {
        created.obj1 = result;
        return result;
      })
      .then(function() {
        return db.Employer.create(obj2);
      })
      .then(function(result) {
        created.obj2 = result;
        res.json(created);
      });
  });

  // app.post("/api/open", function(req, res) {
  //   db.Opening.create(req.body).then(function(dbOp) {
  //     res.json(dbOp);
  //   });
  // });

  // get all openings for candidate page
  app.get("/api/opens", function(req, res) {
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

var db = require("../models");
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
  app.post("/api/new-candidate", function(req, res) {
    var data = req.body;
    console.log(data)
    db.Candidate.create(req.body).then(function(dbCan) {
      res.json(dbCan);
    });
  });

  // Create a new employer
  app.post("/api/new-employer", function(req, res) {
    console.log(req.body);
    db.Employer.create(req.body).then(function(dbEmp) {
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

  app.post("/api/Opening", function(req, res) {
    var obj1 = {
      certs_req: req.body.certs_req,
      exp_req: req.body.exp_req,
      certs_pref: req.body.certs_pref,
      exp_pref: req.body.exp_pref,
      position: req.body.position,
      location: req.body.location
    };
    var obj2 = {
      email: req.body.email,
      password: req.body.password
    }

    var created = {}
    db.Model1.create(obj1)
    .then(function(result) {
      created.obj1 = result;
      return result;
    })
    .then(function() {
      return db.Model2.create(obj2)
    })
    .then(function(result) {
      created.obj2 = result
      res.json(create);
    });

  });
};
// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // EXISTING USER LOGIN POST REQUEST
//   app.post("/api/login", function(req, res) {
//     console.log (req.body);
//     res.redirect("/");
//   });

// // CANDIDATES POST REQUEST
// app.post("/api/new-candidate", function(req, res){
//   var data = req.body;
//   console.log(data);
//   // db.
//   // res.redirect("/can/"+id);
//   res.json({success:true});
// })
// // EMPOLYERS POST REQUEST
// app.post("/api/new-employer", function(req, res){
//   var data = req.body;
//   console.log(data);
//   // db.
//   // res.redirect("/emp/"+id);
//   res.json({success:true});
// })
// // OPENINGS POST REQUEST
// app.post("/api/new-opening", function(req, res){
//   var data = req.body;
//   console.log(data);
//   // db.
//   res.json({success:true});
// })

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });
// };

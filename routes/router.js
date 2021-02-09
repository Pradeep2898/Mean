const express = require("express");
const router = express.Router();
const Students = require("../models/students");

router.get("/", (req, res) => {
  Students.find()
    .exec()
    .then(result => {
      res.send(result);
      //console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});
router.get("/:id", (req, res) => {
  Students.findOne({ studId: req.params.id })
    .exec()
    .then(result => {
      res.send(result);
      //console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});
router.post("/create", (req, res, next) => {
  const student = new Students({
    name: req.body.name,
    marks: req.body.marks,
    studId: req.body.studId
  });
  student
    .save()
    .then(result => {
      res.send(result);
      //console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});
router.patch("/:id", (req, res) => {
  Students.findOneAndUpdate(
    { studId: req.params.id },
    { $set: req.body } //we can use name:'Rahul' as well, this one is similar to put where we are updating all fields
  )
    .exec()
    .then(result => {
      res.send(`Successfully updated the document:\n ${result}`);
      //console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});
router.delete("/:id", (req, res) => {
  Students.findOneAndDelete({ studId: req.params.id })
    .exec()
    .then(result => {
      res.send(`Successfully deleted the document:\n ${result}`);
      //console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;

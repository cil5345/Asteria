const db = require("../models");
  
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("hit get users / user controller")
    db.User
      .find({})
      // .findAll({})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("hit user controller get by id")
    console.log("params")
    console.log(req.params.id)
    //comes back undefinded \/ \/ \/ \/
    // console.log("query")
    // console.log(req.query.id)
    db.User
      .findOne({ fb_ID: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("hit create user controller")
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
  }//,
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
}
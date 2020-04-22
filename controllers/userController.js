const db = require("../models");
const compJSON = require("../matches/comp.json")

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findOne({ fb_ID: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
  },
  findComp: function (req, res) {

    const symbol = req.params.symbol
    const prefrence = req.params.prefrence

    const compArr = compJSON.filter(sign => (sign.symbol === symbol))
    const comp = compArr[0].comp

    const prefArr = prefrence.split("")

    db.User
      //https://stackoverflow.com/questions/33627238/mongoose-find-with-multiple-conditions
      //https://stackoverflow.com/questions/26814456/          how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find
      //https://stackoverflow.com/questions/43146716/mongoose-query-same-field-with-different-values
      .find({ symbol: { $in: [...comp] }, gender: { $in: prefArr } })
      .then(data => {
        res.json(data)
      })
      .catch(err => res.status(422).json(err));
  },
  updateProf: (req, res) => {
    db.User.findOneAndUpdate({ fb_ID: req.params.id }, { symbol: req.params.symbol, gender: req.params.gender, prefrence: req.params.prefrence })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  },
  addInteraction: (req, res) => {
    db.User.findOneAndUpdate({ fb_ID: req.params.bachID }, { $push: { interactions: { fb_ID: req.params.fishID, like: req.params.like }}})
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}
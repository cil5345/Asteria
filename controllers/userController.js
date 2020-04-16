const db = require("../models");
const compJSON = require("../matches/comp.json")

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    console.log("hit get users / user controller")
    db.User
      .find({})
      // .findAll({})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log("hit user controller get by id")
    console.log("params")
    console.log(req.params.id)
    db.User
      .findOne({ fb_ID: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("hit create user controller")
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
  },
  findComp: function (req, res) {
    console.log("usar find comps")
    db.User
      .find({})
      .then(data => {

        const symbol = req.params.symbol
        const prefrence = req.params.prefrence

        const compArr = compJSON.filter(sign => (sign.symbol === symbol))

        const { comp } = compArr[0]

        const prefArr = prefrence.split("")
        
        const symbolComp = []

        let hit = 0
        for (let i = 0; i < data.length; i++) {
          for (let inner = 0; inner < comp.length; inner++) {
            if (data[i].symbol === comp[inner]) {
              symbolComp.push(data[i])
            }
          }
        }
        
        const finalComp = symbolComp.filter(user => prefArr.indexOf(user.gender) !== -1)
        
        res.json(finalComp)
      })
      .catch(err => res.status(422).json(err));
    //Last push
  },
  updateProf: (req, res) => {
    db.User.findOneAndUpdate({ fb_ID: id }, {symbol: req.params.symbol, gender: req.params.gender, prefrence: req.params.prefrence})
            .then(data => console.log(data))
            .catch(err => console.log(err))
  }
}
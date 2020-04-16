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
  findComp: async function (req, res) {
    console.log("usar find comps")
    db.User
      .find({})
      .then(data => {
        //Last push

        console.log("we are finding trying to find comps in the user controller")
        const symbol = req.params.symbol
        const prefrence = req.params.prefrence
        console.log(symbol + " " + prefrence)//

        const compArr = compJSON.filter(symbol => (symbol.symbol === symbol))
        console.log(compArr)
        const { comp } = compArr[0]

        console.log(comp)

        const prefArr = await prefrence.split("")

        const symbolComp = []

        for (let i = 0; i < data.length; i++) {
          for (let inner = 0; inner < comp.length; inner++) {
            if (data[i].symbol === comp[inner]) {
              symbolComp.push(data[i])
            }
          }
        }
        console.log("comp matches")
        console.log(symbolComp)
        const finalComp = symbolComp.filter(user => {

          (prefArr.indexOf(user.gender) !== -1)
        })
        res.json(finalComp)
      })
      .catch(err => res.status(422).json(err));
    //Last push
  }
  /*
  updateProf: (id, symbol, gender, prefrence) => {
    db.User.findOneAndUpdate({ fb_ID: id }, {})
  }

  */
}
const db = require("../models");
const compJSON = require("../matches/comp.json")

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    console.log("hit get users / user controller")
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
    console.log("hit create user controller")
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
  },
  findComp: function (req, res) {
    console.log("usar find comps")
    
    const symbol = req.params.symbol
    const prefrence = req.params.prefrence

    const prefArr = prefrence.split("")

    db.User

    // PSquery FIND SYMBOL : [X Y Z W], PREFRENCE : [X0]
    .find({ symbol: { $in: [...prefArr] }})
      .then(data => res.json(data))


            // db.User
        //   .find({ symbol: { $in: [...comp]}})//bfore trying two fields
        //   .find({ symbol: { $in: [...comp]}, gender :{ $regex: [pref], $options: "i"}})
        // .find({ symbol: { $in: [comp]}})
        // .find({ gender: { $regex: [pref], $options: "i"}})
        //{ "authors": { "$regex": "Alex", "$options": "i" } },
        
        //@HACER
        //https://stackoverflow.com/questions/33627238/mongoose-find-with-multiple-conditions
          //https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find
        //   .then(dbModel => res.json(dbModel))
          //@HACER https://stackoverflow.com/questions/43146716/mongoose-query-same-field-with-different-values
        //   .catch(err => res.status(422).json(err));




      /*.find({})
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
      })*/
      .catch(err => res.status(422).json(err));
  },
  updateProf: (req, res) => {
    db.User.findOneAndUpdate({ fb_ID: req.params.id }, {symbol: req.params.symbol, gender: req.params.gender, prefrence: req.params.prefrence})
            .then(data => console.log(data))
            .catch(err => console.log(err))
  }
}
const db = require("../models");
const compJSON = require("../matches/comp.json")

// Defining methods for the booksController
module.exports = {
  //find all users
  findAll: function (req, res) {
    db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //find user by fbID
  findById: function (req, res) {
    db.User
      .findOne({ fb_ID: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create a user - name, imagelink, fbID
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
  },
  //find compatible users
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
  //fill details for a user - gender symbol prefrence
  updateProf: (req, res) => {
    db.User.findOneAndUpdate({ fb_ID: req.params.id }, { symbol: req.params.symbol, gender: req.params.gender, prefrence: req.params.prefrence })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  },
  //add interaction, a user said yes or no to another user
  //within is checking if there is a match
  addInteraction: (req, res) => {
    db.User.findOneAndUpdate({ fb_ID: req.params.bachID }, { $push: { interactions: { fb_ID: req.params.fishID, like: req.params.like } } })
      .then(data => {

        //look into the person that was just liked
        //see if they have an interaction that has current liker's
        //id and that is true

        if (req.params.like) {

          db.User.findOne({ fb_ID: req.params.fishID })
            .then(user => {
              // if(data.interactions.fb_ID === req.params.bachID && ) {

              // }
              let cnt = 0
              for (const i of user.interactions) {
                if (i.fb_ID === req.params.bachID && i.like && cnt < 2) {

                  db.User.findOneAndUpdate({ fb_ID: req.params.bachID }, { $push: { matches: { fb_ID: req.params.fishID } } })
                    .then(dbModel => {
                      console.log("sucess")
                      cnt++
                    })
                    .catch(err => console.log(err))

                  db.User.findOneAndUpdate({ fb_ID: req.params.fishID }, { $push: { matches: { fb_ID: req.params.bachID } } })
                    .then(dbModel => {
                      console.log("sucess")
                      cnt++
                    })
                    .catch(err => console.log(err))
                }
              }
            })
          // console.log(data)
        }
      })
      .catch(err => console.log(err))
  },
  getNewMatches: (req, res) => {
    console.log("hit user controller get new matches")
    db.User.findOne({ fb_ID: req.params.id })
      .then(data => {
        console.log(data.interactions)
        res.json(data.interactions)
      })
      .catch(err => console.log(err))
  }
}
















const db = require("../models");
const compJSON = require("../matches/comp.json")
const userController = require("./userController")

module.exports = {
    findAll: async function(req, res) {

        //should filter and return an object and deconstructe comp array
        //{req.sign, [comp signs]}
        console.log("hit findall in compController")
        console.log(`${req.params.symbol}`)
        console.log(`${req.params.prefrence}`)
        const compArr = compJSON.filter(symbol => (symbol.symbol === req.params.symbol))
        const { comp } = compArr[0]
        console.log(comp)
        console.log(`${req.params.symbol} >>> ${[JSON.stringify(comp)]}}`)
        //[ 'Leo', 'Sagittarius', 'Gemini', 'Aquarius' ]
        //Aries >>> ["Leo","Sagittarius","Gemini","Aquarius"]}
        const pref = req.params.prefrence.split("")
        console.log(pref)

        //Last push
        const allUsers = await userController.findAll(req, res)
        console.log(allUsers)
        //Last push

        const symbolCompUsers =  comp.some(symbol => allUsers.symbol)

        //some(..) checks each element of the array against a test function and returns true if any element of the array passes the test function, otherwise, it returns false
        //look for all users that have a 

        //itll be an array contain any mix of f,m
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

        //we will send in BACH's sign and prefrence
        //sign will point to 4 compatible signs
        //we will get those users with those signs
        //afterwards we will narrow done to those of the prefrence of the BACH 
      }
}
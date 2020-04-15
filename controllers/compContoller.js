const comp = require("../matches/comp.json")

module.exports = {
    findAll: function(req, res) {

        //should filter and return an object and deconstructe comp array
        //{req.sign, [comp signs]}
        console.log("hit findall in compController")
        const { comp } = comp.filter(sign => (sign.sign === req.params.sign))
        console.log(`${req.params.sign} >>> ${[...comp]}}`)
        console.log(comp)

        const pref = req.params.prefrence.split("")
        //itll be an array contain any mix of f,m
//@HACER
//https://stackoverflow.com/questions/33627238/mongoose-find-with-multiple-conditions
        db.User
        //   .find({ sign: { $in: [...comp]}})//bfore trying two fields
          .find({ sign: { $in: [...comp]}, gender :{ $regex: pref, $options: "i"}})


          //{ "authors": { "$regex": "Alex", "$options": "i" } },
          //https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find
          .then(dbModel => res.json(dbModel))
          //@HACER https://stackoverflow.com/questions/43146716/mongoose-query-same-field-with-different-values
          .catch(err => res.status(422).json(err));

          //we will send in BACH's sign and prefrence

        //sign will point to 4 compatible signs

        //we will get those users with those signs

        //afterwards we will narrow done to those of the prefrence of the BACH
        
        
      },
}
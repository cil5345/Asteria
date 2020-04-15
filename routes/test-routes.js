const userController = require("../controllers/userController")
const compController = require("../controllers/compContoller")

module.exports = function(app)  {

    app.get("/api/users/:id", (req, res) => {
        
        console.log("hit test routes get by id:" + req.params.id)
        userController.findById(req, res)
    })


    app.get("/api/users", (req, res) => {

        console.log("hit test routes get users")
        userController.findAll(req, res)
    })

    app.get("/api/comp/:sign/:prefrence", (req, res) => {

        console.log("getting compatible users")
        console.log(`${req.params.sign}`)
        console.log(`${req.params.prefrence}`)
        console.log("reached testroutes get comp.")

        //we will send in BACH's sign and prefrence

        //sign will point to 4 compatible signs

        //we will get those users with those signs

        //afterwards we will narrow done to those of the prefrence of the BACH

    })

    /*
    will need route for userController.findByIdAndUpdate
    in order to add other essentail details to the user, after they have logged
    in for the first time
    */
}
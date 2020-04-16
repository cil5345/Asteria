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

    app.get("/api/comp/:symbol/:prefrence", (req, res) => {

        console.log("getting compatible users")
        console.log(`${req.params.symbol}`)
        console.log(`${req.params.prefrence}`)
        console.log("reached testroutes get comp.")
        userController.findComp(req, res)
    })

    app.post("/api/:id/:symbol/:gender/:prefrence", (req, res) => {
        console.log("hit find update in test routes")
    })

    /*
    will need route for userController.findByIdAndUpdate
    in order to add other essentail details to the user, after they have logged
    in for the first time
    */
}
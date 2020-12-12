const userController = require("../controllers/userController")

module.exports = function (app) {
    // get a user by their id
    app.get("/api/users/:id", (req, res) => {

        userController.findById(req, res)
    })
    // create a user
    app.post("/api/users", (req, res) => {
        
        console.log("creating user")
        userController.create(req, res)
    })
    // get all users
    app.get("/api/users", (req, res) => {

        userController.findAll(req, res)
    })
    // get compaitble users
    app.get("/api/comp/:symbol/:prefrence", (req, res) => {

        userController.findComp(req, res)
    })
    // get users matched with
    app.get("/api/users/:id/matches", (req, res) => {

        userController.getNewMatches(req, res)
    })
    // post new details for a user
    app.post("/api/:id/:symbol/:gender/:prefrence", (req, res) => {

        userController.updateProf(req, res)
    })
    // post an interaction
    app.post("/api/:bachID/:fishID/:like", (req, res) => {

        userController.addInteraction(req, res)
    })
}
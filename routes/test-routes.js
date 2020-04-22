const userController = require("../controllers/userController")
// const compController = require("../controllers/compContoller")

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

        userController.findComp(req, res)
    })

    app.post("/api/:id/:symbol/:gender/:prefrence", (req, res) => {
        console.log("hit find update in test routes")
        userController.updateProf(req, res)
    })

    app.post("/api/:bachID/:fishID/:outcome", (req, res) => {
        console.log(`${req.params.bachID} ${req.params.fishID} ${req.params.outcome}`)
        userController.addInteraction(req, res)
    })
}
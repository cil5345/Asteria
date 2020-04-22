const userController = require("../controllers/userController")
// const compController = require("../controllers/compContoller")

module.exports = function(app)  {

    app.get("/api/users/:id", (req, res) => {

        userController.findById(req, res)
    })


    app.get("/api/users", (req, res) => {

        userController.findAll(req, res)
    })

    app.get("/api/comp/:symbol/:prefrence", (req, res) => {

        userController.findComp(req, res)
    })

    app.post("/api/:id/:symbol/:gender/:prefrence", (req, res) => {

        userController.updateProf(req, res)
    })

    app.post("/api/:bachID/:fishID/:like", (req, res) => {

        userController.addInteraction(req, res)
    })
}
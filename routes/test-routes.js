const userController = require("../controllers/userController")

module.exports = function(app) {


    app.get("/api/users", (req, res) => {


        console.log("hit test routes get users")
        userController.findAll(req, res)
    })
}
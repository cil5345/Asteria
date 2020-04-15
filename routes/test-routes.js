const userController = require("../controllers/userController")

module.exports = function(app) {


    app.get("/api/users", (req, res) => {


        userController.findAll(req, res)
    })
}
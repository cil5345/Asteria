const userController = require("../controllers/userController")

module.exports = function(app) {
    
    app.post("/api/users", (req, res) => {

        console.log("you're on the list")
        userController.create(req, res)
    })
}
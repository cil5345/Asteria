const userController = require("../controllers/userController")
import comp from "../matches/comp.json"


module.exports = function(app)  {


    app.get("/api/users", (req, res) => {


        console.log("hit test routes get users")
        userController.findAll(req, res)
    })

    /*
    will need route for userController.findByIdAndUpdate
    in order to add other essentail details to the user, after they have logged
    in for the first time
    */
}
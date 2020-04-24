const userController = require("../controllers/userController")
// const compController = require("../controllers/compContoller")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

module.exports = function(app)  {
    // get a user by their id
    app.get("/api/users/:id", (req, res) => {

        userController.findById(req, res)
    })
    // get all users
    app.get("/api/users", (req, res) => {

        userController.findAll(req, res)
    })
    // get compaitble users
    app.get("/api/comp/:symbol/:prefrence", (req, res) => {

        userController.findComp(req, res)
    })
    // get new matches
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
    
    app.post("/photo/upload/:id", upload.single("photo"), (req, res, next) => {

    console.log(`hit server route for photo upload`)
    console.log(`${req.file}`)
    console.log(`${req.file.fieldname}`)
    console.log(`${req.file.path}`)
    console.log(`${req.params.id}`)
})
}
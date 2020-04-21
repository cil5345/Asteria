const path = require("path")
const router = require("express").Router();

const userController = require("../controllers/userController")

const PUB_DIR = path.resolve(__dirname, "../client/build")

module.exports = function(app) {

    app.post("/api/users", (req, res) => {
        
        console.log("creating user")
        userController.create(req, res)
    })

    // app.get('/*', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../client/public/build/index.html'), function(err) {
    //       if (err) {
    //         res.status(500).send(err)
    //       }
    //     })
    //   })

    // app.get("*", (req, res) => {

    //     res.sendFile(path.join(PUB_DIR, "index.html"))
    // })

    // app.get("*", (req, res) => {
    //     res.sendFile(path.join(PUB_DIR, "index.html"))
    // })
}
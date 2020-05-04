const { updateImageLink, getImageLink } = require("../controllers/userController")
const path = require("path")
const fs = require("fs")

module.exports = function (app) {

    app.post("/photo/upload/:id", async (req, res) => {

        const b64 = req.body.data.split(",")[1]
        const buff = new Buffer(b64, "base64")

        await fs.writeFile(`../app/uploads/${req.params.id}.${req.body.ext}`, buff, err => {
            if(err) console.log(err)
            
        updateImageLink(req, res)
        })
    })
    
    app.get("/api/user/:image", async (req, res) => {

        fs.readdir(__dirname + "/../uploads", (err, files) => {
            console.error(err)
            console.log(files)
        })

        console.log("oh boy here i go debugging again")
        res.sendFile(path.resolve(__dirname + `/../uploads/${req.params.image}`))
    })

    app.get("/api/image/:sign", (req, res) => {

        res.sendFile(path.resolve(__dirname + `/../sign-images/${req.params.sign}.png`))
    })
}
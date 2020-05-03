const { updateImageLink, getImageLink } = require("../controllers/userController")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })//.single("photo")

module.exports = function (app) {

    app.post("/photo/upload/:id", async (req, res) => {

        const b64 = req.body.data.split(",")[1]
        const buff = new Buffer(b64, "base64")
        //writes a file in this convention userFBid.extension
        await fs.writeFile(`../app/uploads/${req.params.id}.${req.body.ext}`, buff, err => {
            if(err) console.log(err)
            //just for debugging/to be removed
            fs.readdir("../app/uploads", (err, files) => {
                console.log("app /up")
                console.log(files)
            })
        updateImageLink(req, res)
        })
        //add bs res if we get error for no res
        res.send("ok")
    })
    
    app.get("/api/user/:image", async (req, res) => {


        fs.readdirSync(__dirname + `/../uploads/${req.params.image}`, (err, files) => {
            console.log("leslee files schols")
            console.log(files)
        })

        res.sendFile(path.resolve(__dirname + `/../uploads/${req.params.image}`))
    })
}
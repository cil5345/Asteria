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

        console.log(req.body.data)

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
    
    app.get("/api/user/image/:id", (req, res) => {
        console.log(getImageLink(req, res))
        // console.log(path.resolve(__dirname + `/../uploads/${getImageLink(req, res)}`))
        // res.sendFile(path.resolve(__dirname + `/../uploads/${getImageLink(req, res)}`))
    })
}
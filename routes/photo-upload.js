const multer = require("multer")
const path = require("path")
const fs = require("fs")

// const UPLOAD_DIR = path.resolve(__dirname, "../uploads")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })//.single("photo")

//dest: "../uploads/" })
module.exports = function (app) {

    // app.post("/photo/upload/:id", upload.single("profile_picture"), (err, req, res, next) => {
    app.post("/photo/upload/:id", async (req, res) => {

        console.log("we in err")        
        console.log(req.body.data)
        //console.log(req.data)//undefined
        console.log("****************************")

        const b64 = req.body.data.split(",")[1]
        const buff = new Buffer(b64, "base64")
        await fs.writeFile("../app/uploads/" + req.body.name, buff, err => {
            if(err) console.log(err)
            console.log("die alone")
            fs.readdir("../app/uploads", (err, files) => {
                console.log("app /up")
                console.log(files)

            })
            res.sendFile(__dirname + `../app/uploads/${req.body.name}`)
        })

        res.send("ok")
    })

    app.get("/api/user/:id", (req, res) => {

        res.sendFile("../uploads/spb.jpb")
    })
}
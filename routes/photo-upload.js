const multer = require("multer")
const path = require("path")

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

    app.post("/photo/upload/:id", upload.single("profile_picture"), (req, res, next) => {

        // upload(req, res, (err) => {
        //     if(err) return console.log(err)

        //     console.log(`hit server route for photo upload`)
        //     console.log(`${req.file}`)
        //     console.log(`${req.file.fieldname}`)
        //     console.log(`${req.file.path}`)
        //     console.log(`${req.params.id}`)
        //     console.log(req.file)
        // })


        console.log(req)
        console.log(`${req.file}`)
        console.log(`${req.files}`)
        // console.log(`${req.file.fieldname}`)
        // console.log(`${req.file.path}`)
        console.log(req.params)
        console.log(`${req.params.file}`)
        console.log(`${JSON.stringify(req.params)}`)
        res.send("ok")
    })
}
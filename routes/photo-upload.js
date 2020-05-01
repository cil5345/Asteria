const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: "../uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + path.extname(file.originalname))
    }
})

// const upload = multer({ 
//     storage: storage
// }).single("photo")

//dest: "../uploads/" })
module.exports = function (app) {

    app.post("/photo/upload/:id", (req, res) => {

        // upload(req, res, (err) => {
        //     if(err) return console.log(err)

        //     console.log(`hit server route for photo upload`)
        //     console.log(`${req.file}`)
        //     console.log(`${req.file.fieldname}`)
        //     console.log(`${req.file.path}`)
        //     console.log(`${req.params.id}`)
        //     console.log(req.file)
        // })


        console.log(`${req.file}`)
        console.log(`${req.files}`)
        // console.log(`${req.file.fieldname}`)
        // console.log(`${req.file.path}`)
        console.log(req)
        console.log(req.params)
        console.log(`${req.params.file}`)
        console.log(`${JSON.stringify(req.params)}`)
        res.send("ok")
    })
}
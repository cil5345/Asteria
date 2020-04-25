const multer = require("multer")
const path = require("path")

module.exports = function(app) {

const storage = multer.diskStorage({
    destination: "../uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + path.extname(file.originalname))
    }
})

const upload = multer({ 
    storage: storage
}).single("photo")

//dest: "../uploads/" })
    
    app.post("/photo/upload/:id", upload, (req, res, next) => {

        upload(req, res, (err) => {
            if(err) return console.log(err)

            console.log(`hit server route for photo upload`)
            console.log(`${req.file}`)
            console.log(`${req.file.fieldname}`)
            console.log(`${req.file.path}`)
            console.log(`${req.params.id}`)
            console.log(req.file)
        })
    })
}
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

    // app.post("/photo/upload/:id", upload.single("profile_picture"), (err, req, res, next) => {
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
        // for(let b of req.params) console.log(b)
        console.log("we in err")        
        console.log("file")
        console.log("body")
        // if(err) console.log(err)
        console.log(req.query)
        console.log(req.body.data)
        console.log(req.data)
        console.log("****************************")
        console.log("****************************")
        // console.log(req)
        console.log(req.formData)
        //console.log(req.params)//just id: value

        // console.log(req.file.buffer)
        // console.log(req)
        // console.log(`${req.file}`)
        /**********************************************************/
        /**********************************************************/
        /**********************************************************/
        //no
        //console.log(req.file)//undefined
        //console.log(req.body.file)//undefined
        // console.log(req.files)//undefined
        /**********************************************************/
        /**********************************************************/
        /**********************************************************/
        res.send("ok")
    })
}
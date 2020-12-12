const { updateUserImageLink, getImageLink } = require("../controllers/userController")
const path = require("path")
const fs = require("fs")
require("dotenv").config()

const AWS = require("aws-sdk");
// configuring credentials and region
AWS.config.credentials.accessKeyId = process.env.aws_access_key_id
AWS.config.credentials.secretAccessKey = process.env.aws_secret_access_key
AWS.config.update({ region: "us-east-1" })

const s3 = new AWS.S3({ apiVersion: "2006-03-01" })

module.exports = function (app) {

    app.post("/photo/upload/:id", async (req, res) => {

        // parse incoming image and create a new buffer from it
        const buff = Buffer.from(req.body.data.split(",")[1], "base64")
        // user's facebook id from url paramater
        const fb_ID = req.params.id
        // init date object, will use to get time and append in front of key
        // thus ensuring unique key each upload
        const date = new Date()
        // upload params define what bucket this object goes into
        // the key is a reference to the image
        // the body is the file itself, well use the buffer
        const uploadParams = { 
            Bucket: process.env.BUCKET_NAME, 
            Key: `${date.getTime()}-${fb_ID}.${req.body.ext}`,
            Body: buff,
            ACL: "public-read"
        }
        // upload the image
        s3.upload(uploadParams, (err, data) => {
          if(err) {
            console.log("Error", err)
          }
          if(data) {
            // upon succesful upload pass image link to the request body
            req.body.s3ImageLocation = data.Location
            // then it is passed into the controller and saved to the db
            // image link is saved to the db, not the image
            updateUserImageLink(req, res)
          }
        })
    })
    
    app.get("/api/image/:sign", (req, res) => {
        res.sendFile(path.resolve(__dirname + `/../sign-images/${req.params.sign.toLowerCase()}.png`))
    })
}
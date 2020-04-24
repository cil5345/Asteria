const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fb_ID: {
    type: String
  },
  name: {
    type: String
    // required: true
  },
  imageLink: {
    type: String,
    required: false
  },
  symbol: {
    type: String,
    required: false
  },
  //@HACER implement if there is time
  // searchOrder: [
  //   {
  //     type: Number,
  //     required: false
  //   }
  // @HACER maybe change to true if we are 
  // able to initilize user with a DOB from FB
  // ]
  gender: {
    type: String
  },
  prefrence: {
    type: String
  },
  interactions: [
    {
      fb_ID: {
        type: String
      },
      like: {
        type: Boolean
      }
    }
  ],
  matches: [
    {
      fb_ID: {
        type: String,
      },
      fresh: {
        type: Boolean,
        default: true
      },
      name: {
        type: String
      },
      imageLink: {
        type: String
      },
      symbol: {
        type: String
      },
      unique: true,
      dropDups: true
    }
  ]
})

const User = mongoose.model("User", UserSchema)

module.exports = User
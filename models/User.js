const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: false
  },
  symbol: {
    type: String,
    required: false
    // @HACER maybe change to true when
    //we see if we can pull DOB from FB
  },
  searchOrder: [
    {
      type: Number,
      required: false
    }
    // @HACER maybe change to true if we are 
    // able to initilize user with a DOB from FB
  ]
})
/*bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
*/
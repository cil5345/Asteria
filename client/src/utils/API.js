// import axios from "axios";
const axios = require("axios")

module.exports = {

  getAllUsers: () => {
    return axios.get("/api/users")
  },
  getOneUser: id => {
    return axios.get(`/api/users/${id}`)
  },
  createUser: user => {
    console.log("hit axios post")
    console.log(user)
    return axios.post("/api/users", user)
  }
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
}

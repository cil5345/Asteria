// import axios from "axios";
const axios = require("axios")

module.exports = {
  //GET ROUTES
  getAllUsers: () => {
    return axios.get("/api/users")
  },
  getOneUser: id => {
    return axios.get(`/api/users/${id}`)
  },
  getCompatible: (sign, prefrence) => {
    console.log("hit axiios get comp")
    return axios.get(`/api/comp/${sign}/${prefrence}`)
  },
  //POST ROUTES
  createUser: user => {
    console.log("creating user")
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

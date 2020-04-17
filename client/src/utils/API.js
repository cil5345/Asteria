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
  },
  updateUser: (id, symbol, gender, prefrence) => {
    console.log("updating user in axios")
    console.log()
    return axios.post(`/api/${id}/${symbol}/${gender}/${prefrence}`)
  }
}

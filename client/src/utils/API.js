const axios = require("axios")

const dk = "DEBUG_KEY"

module.exports = {
  //GET ROUTES
  getAllUsers: () => {
    return axios.get("/api/users")
  },
  getOneUser: id => {
    return axios.get(`/api/users/${id}`)
  },
  getCompatible: (sign, prefrence) => {
    return axios.get(`/api/comp/${sign}/${prefrence}`)
  },
  //POST ROUTES
  createUser: user => {
    return axios.post("/api/users", user)
  },
  updateUser: (id, symbol, gender, prefrence) => {
    console.log(dk + " updating user in axios")
    console.log(`${dk} ROUTE:/api/${id}/${symbol}/${gender}/${prefrence}`)
    return axios.post(`/api/${id}/${symbol}/${gender}/${prefrence}`)
  }
}

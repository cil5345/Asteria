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
  getNewMatches: id => {
    return [
      {
        fb_ID: "892",
        imageLink: "https://randomuser.me/api/portraits/women/69.jpg",
        name: "Lois Kennedy",
        symbol: "Capricorn",
        gender: "M",
        prefrence: "F"
      },
      {
        fb_ID: "597",
        imageLink: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Gloria Russell",
        symbol: "Libra",
        gender: "F",
        prefrence: "M"
      },
      {
        fb_ID: "872",
        imageLink: "https://randomuser.me/api/portraits/women/14.jpg",
        name: "Pamela Johnston",
        symbol: "Sagittarius",
        gender: "M",
        prefrence: "FM"
      }
    ]
  },
  //POST ROUTES
  createUser: user => {
    return axios.post("/api/users", user)
  },
  updateUser: (id, symbol, gender, prefrence) => {
    return axios.post(`/api/${id}/${symbol}/${gender}/${prefrence}`)
  }
}

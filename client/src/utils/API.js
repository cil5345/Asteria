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
    return axios.get(`/api/users/${id}/matches`)
  },
  //POST ROUTES
  createUser: user => {
    return axios.post("/api/users", user)
  },
  updateUser: (id, symbol, gender, prefrence) => {
    return axios.post(`/api/${id}/${symbol}/${gender}/${prefrence}`)
  },
  addInteraction: (bachID, fishID, like) => {
    return axios.post(`/api/${bachID}/${fishID}/${like}`)
  },
  uploadPhoto: (id, ext, data) => {
    return axios({
      method: "post",
      url: `/photo/upload/${id}`,
      data: {
        ext: ext,
        data: data
      }
    })
  },
  getImage: image => {
    console.log(sessionStorage.getItem("imageLink"))
    return axios.get(`/api/user/${image}`)
  }
}

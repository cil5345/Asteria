const fs = require("fs")

const queryUrl = "https://randomuser.me/api/?results=50&nat=US"

const imageLink = "https://m.media-amazon.com/images/M/MV5BMTE5MjM5MzM3M15BMl5BanBnXkFtZTYwOTEzOTY0._V1_UY317_CR6,0,214,317_AL_.jpg"

// array for ids
const ids = []
const names = []
const symbols = [ "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
const genders = [ "F", "M" ]
const prefrences = [ "F", "M", "FM"]

const axios = require("axios")

var counter = 0

createPerson()

function appendUser(user) {
    counter++
    if(counter === 50 ) {
        console.log("donezo")
    }
    fs.appendFile("thing.txt", user, err => {
            if (err) return console.log("shits gone bad")
    
            // console.log("it went well, watch the language")
    })
    
}

async function createPerson() {
    
    await getRandomNames()

    for(let i = 0; i < 50; i++) {

        let getID = idGenerator()
        while(!isUnique(getID)) {
            getID = idGenerator()
        }
        
        if(isUnique(idGenerator())) {

            const user= {
                fb_ID: getID,
                imageLink: names[i].imageLink,
                name: names[i].name,
                symbol: symbols[random(symbols.length)],
                gender: genders[random(genders.length)],
                prefrence: prefrences[random(prefrences.length)]
            }
            console.log(user)
            if(i !== 49) {
                console.log(",")
            }
        }
    }
}

function random(length) {
    return Math.floor(Math.random() * length)
}

function isUnique(id) {
    for(let i = 0; i < ids.length; i++) {
        if(id === ids[i]) return false
    }
    return true
}

function idGenerator() {
    return (Math.floor(Math.random() * 1000) + 1).toString()
}

async function getRandomNames() {

    const userFeedback = await axiosCall()
    for(let user of userFeedback.data.results) names.push({name: `${user.name.first} ${user.name.last}`, imageLink: `${user.picture.large}`})
}

function axiosCall() {
    return axios.get(queryUrl)
}
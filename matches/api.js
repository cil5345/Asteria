const axios = require("axios")
const fs = require("fs")

const queryURL = "https://zodiacal.herokuapp.com/api"

let feedback
write()

function createJSON(data) {
    // console.log(feedback.data[0])
    // for(let sign of feeback) sign.id
    // sign.compatibility
    for (let i = 0; i <= feedback.data.length + 1; i++) {
        
        const obj = {
            sign: feedback.data[i].name,
            comp: [...feedback.data[i].compatibility]
        }
        
        console.log(i + obj.sign)
        
        if (i === 0) {
            
            fs.appendFile("comp.json", `[${JSON.stringify(obj)},`, err => {
                if (err) return console.log(i + " " + err)
                
                console.log("first")
            })
        }
        else if (i > 0 && i < feedback.data.length + 1) {
            
            console.log(obj)
            fs.appendFile("comp.json", `${JSON.stringify(obj)},`, err => {
                if (err) return console.log(i + " " + err)
                
                console.log("we finished")
            })
        }
        else if (i === feedback.data.length + 2) {
            fs.appendFile("comp.json", `${JSON.stringify(obj)}]`, err => {
                if (err) return console.log(i + " " + err)
                
                console.log("nerd")
            })
        }
    }
}

async function write() {
    feedback = await getMatches()
    createJSON()
}


function getMatches() {
    return axios.get(queryURL)
}

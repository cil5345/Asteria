module.exports = {
    storeInSession: user => {
        // console.log("hit store in session")
        if(user.fb_ID) sessionStorage.setItem("fb_ID", user.fb_ID)
        if(user.name) sessionStorage.setItem("name", user.name)
        if(user.imageLink) sessionStorage.setItem("imageLink", user.imageLink)
        if(user.gender) sessionStorage.setItem("gender", user.gender)
        if(user.prefrence) sessionStorage.setItem("prefrence", user.prefrence)
        if(user.symbol) sessionStorage.setItem("symbol", user.symbol)

        // if(user.fb_ID) console.log(sessionStorage.getItem("fb_ID"))
        // if(user.name) console.log(sessionStorage.getItem("name"))
        // if(user.imageLink) console.log(sessionStorage.getItem("imageLink"))
        // if(user.gender) console.log(sessionStorage.getItem("gender"))
        // if(user.prefrence) console.log(sessionStorage.getItem("prefrence"))
        // if(user.symbol) console.log(sessionStorage.getItem("symbol"))
    }
}
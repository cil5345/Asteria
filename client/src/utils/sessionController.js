module.exports = {
    storeInSession: user => {
        // console.log("hit store in session")
        if(user.fb_ID) sessionStorage.setItem("fb_ID", user.fb_ID)
        if(user.name) sessionStorage.setItem("name", user.name)
        if(user.imageLink) sessionStorage.setItem("imageLink", user.imageLink)
        if(user.gender) sessionStorage.setItem("gender", user.gender)
        if(user.prefrence) sessionStorage.setItem("prefrence", user.prefrence)
        if(user.symbol) sessionStorage.setItem("symbol", user.symbol)
        if(user.redirect) sessionStorage.setItem("redirect", user.redirect)

        console.log(user.imageLink)
    }
}

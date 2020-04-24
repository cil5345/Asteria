import React from "react"
import "./style.css"

export default function PhotoUpload() {


    //want to fancy this up

    return <form method="POST" action={`photo/upload/${sessionStorage.getItem("fb_ID")}`} enctype="multipart/form-data">>
                <input type="file" name="photo" />
                <button type="submit">Submit</button>
            </form>
}
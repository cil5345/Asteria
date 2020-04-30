import React from "react"
import "./style.css"
import { uploadPhoto } from "../../utils/API"

export default function PhotoUpload() {


    /*
    what needs to happen

    photo is dragged and dropped into drop area

    recognize the photo(s)

    post with form/submit
    */
    // const dropArea = document.getElementById("drop-area")
    // ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    //     dropArea.addEventListener(eventName, preventDefaults, false)
    // })
    // const preventDefaults = e => {
    //     e.preventDefault()
    //     e.stopPropagation()
    // }
    // ["dragenter", "dragover"].forEach(eventName => {
    //     dropArea.addEventListener(eventName, highlight, false)
    // })
    // ["dragleave", "drop"].forEach(eventName => {
    //     dropArea.addEventListener(eventName, unhighlight, false)
    // })
    // const highlight = e => {
    //     dropArea.classList.add('highlight')
    // }
    // const unhighlight = e => {
    //     dropArea.classList.remove('highlight')
    // }
    // const handleDrop = e => {
    //     let dt = e.dataTransfer
    //     let files = dt.files
        
    //     handleFiles(files)
    // }
    
    // dropArea.addEventListener('drop', handleDrop, false)

    // const uploadFile = file => {
    //     let url = 'YOUR URL HERE'
    //     let formData = new FormData()

    //     formData.append('file', file)

    //     fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(() => { /* Done. Inform the user */ })
    //         .catch(() => { /* Error. Inform the user */ })
    // }

    const handleFiles = (e, files) => {
        
        // ([...files]).forEach(uploadFile)

        console.log("handleFiles")

        //onchange
        console.log(e.target.value)
        console.log(e.target.values)

        //ondrop
    }
    //we can recognize a photo on change
    //accept a few photos... 3
    //at some point the user will hit submit and we will post it

    return <div id="drop-area">
        <form className="my-form" enctype="multipart/form-data" method="POST" action={`photo/upload/${sessionStorage.getItem("fb_ID")}`} >
            <p>upload</p>
            <div id="drop-photo-div" onDrop={handleFiles}>
            <input type="file" id="fileElem" name="photo" multiple accept="image/*" onChange={handleFiles}/>
            <label className="button" for="fileElem">Select some files</label>
            <button type="submit">upload the jawns</button>
            </div>
        </form>
    </div>
}
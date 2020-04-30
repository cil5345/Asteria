import React from "react"
import "./style.css"
import { uploadPhoto } from "../../utils/API"

export default function PhotoUpload() {


    const uploadPhoto = () => {
        console.log("inside your bones")
    }
    const dropArea = document.getElementById("drop-area")


    ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
    })

    const preventDefaults = e => {
        e.preventDefault()
        e.stopPropagation()
    }
    ["dragenter", "dragover"].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
    })

    ["dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
    })

    const highlight = e => {
        dropArea.classList.add('highlight')
    }

    const unhighlight = e => {
        dropArea.classList.remove('highlight')
    }

    
    const handleDrop = e => {
        let dt = e.dataTransfer
        let files = dt.files
        
        handleFiles(files)
    }
    
    dropArea.addEventListener('drop', handleDrop, false)

    const uploadFile = file => {
        let url = 'YOUR URL HERE'
        let formData = new FormData()

        formData.append('file', file)

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(() => { /* Done. Inform the user */ })
            .catch(() => { /* Error. Inform the user */ })
    }

    const handleFiles = (files) => {
        
        ([...files]).forEach(uploadFile)
    }

    return <div id="drop-area">
        <form className="my-form" method="POST" action={`photo/upload/${sessionStorage.getItem("fb_ID")}`} >
            <p>upload</p>
            <input type="file" id="fileElem" name="photo" multiple accept="image/*" onChange={handleFiles} />
            <label className="button" for="fileElem">Select some files</label>
            <button type="submit">upload the jawns</button>
        </form>
    </div>
}
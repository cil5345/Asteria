import React from "react"
import "./style.css"

export default function PhotoUpload() {


    const uploadPhoto = () => {
        console.log("inside your bones")
    }
    const dropArea = document.getElementById("drop-area")


    ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
    })

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }
    ["dragenter", "dragover"].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
    })

    ["dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
    })

    function highlight(e) {
        dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
        dropArea.classList.remove('highlight')
    }

    dropArea.addEventListener('drop', handleDrop, false)

    function handleDrop(e) {
        let dt = e.dataTransfer
        let files = dt.files

        handleFiles(files)
    }


    function uploadFile(file) {
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

    //want to fancy this up

    return <div id="drop-area">
        <form className="my-form" method="POST" action={`photo/upload/${sessionStorage.getItem("fb_ID")}`} >
            <p>upload</p>
            <input type="file" id="fileElem" name="photo" multiple accept="image/*" onChange={handleFiles} />
            <label className="button" for="fileElem">Select some files</label>
            <button onClick={uploadFile} type="submit">upload the jawns</button>
        </form>
    </div>
}
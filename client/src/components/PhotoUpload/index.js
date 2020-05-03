import React, { useState } from "react"
import { useDropzone } from 'react-dropzone';
import "./style.css"
import { uploadPhoto, getImage } from "../../utils/API"

export default function PhotoUpload(props) {

    const [imagesToShow, setImagesToShow] = useState([])

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleUpload = () => {

        acceptedFiles.forEach(file => {

            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onloadend = () => {

                const ext = file.name.substring(file.name.lastIndexOf(".") + 1 , file.name.length)
                console.log(ext)

                uploadPhoto(sessionStorage.getItem("fb_ID"), ext, reader.result)
                    .then(data => {
                    
                        const adder = document.getElementById("adder")
                        const im = document.createElement("img")
                        im.src = data
                        adder.appendChild(im)
                    })
                    .catch(err => console.log(err))
                sessionStorage.setItem("imageLink", getImage(sessionStorage.getItem("fb_ID")))

                let jawn
                getImage(sessionStorage.getItem("imageLink").substring(sessionStorage.getItem("imageLink").lastIndexOf("/") + 1, sessionStorage.getItem("imageLink").length))
                    .then(data => {
                        console.log(data)
                        jawn = data
                    })
                    .catch(err => console.error(err))
            }
        })
    }

    const handleChange = () => {
        console.log("im going through changes")
    }

    return (
        <>
            <div>
                {imagesToShow.map(image =>
                    <img alt="uploaded jawn" src={image} />
                )}
            </div>
            <div id="adder">

            </div>
            <div className="photoUpload">
                <div onChange={handleChange} name="profile_picture" {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                Drag 'n' drop some files here
                <button className="hi" onClick={open}>
                        Open File Dialog
                </button>
                    <button onClick={handleUpload}>Upload</button>
                </div>
                <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                </aside>
            </div>
        </>
    )
}
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
        //take files
        acceptedFiles.forEach(file => {
            //init reader then read the file
            const reader = new FileReader()
            //read out as base64
            reader.readAsDataURL(file)
            //on the end of load
            reader.onloadend = async () => {
                //get extension
                const extension = file.name.substring(file.name.lastIndexOf(".") + 1 , file.name.length)
                //send user id, file extension, and base64 encoding of image
                //in order to write the file and change imageLink field
                uploadPhoto(sessionStorage.getItem("fb_ID"), extension, reader.result)
                    .then(data => {
                    
                        // const adder = document.getElementById("adder")
                        // const im = document.createElement("img")
                        // im.src = data
                        // im.style.border = "pink solid 40px"
                        // adder.appendChild(im)
                        console.log("donezo")
                    })
                    .catch(err => console.log(err))
                await sessionStorage.setItem("imageLink", getImage(sessionStorage.getItem("fb_ID")))
                
                const im = sessionStorage.getItem("imageLink")

                const fds = im.substring(im.lastIndexOf("/") + 1, im.length)

                getImage(fds)
                    .then(data => {
                        console.log(data)
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
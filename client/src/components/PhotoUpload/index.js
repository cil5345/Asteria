import React, { useState } from "react"
import { useDropzone } from 'react-dropzone';
import "./style.css"
import { uploadPhoto, getImage } from "../../utils/API"

export default function PhotoUpload(props) {

    const [imagesToShow, setImagesToShow] = useState([])

    const [ currentImage, setCurrentImage ] = useState(sessionStorage.getItem("imageLink"))

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
                const extension = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length)
                //send user id, file extension, and base64 encoding of image
                //in order to write the file and change imageLink field
                uploadPhoto(sessionStorage.getItem("fb_ID"), extension, reader.result)
                    .then(data => {
                        console.log(data.data)
                        //update imageLink in session with new imageLink
                        sessionStorage.setItem("imageLink", data.data)
                        //get imageLink set as imLink
                        const imLink = sessionStorage.getItem("imageLink")
                        //get the end of it, we just want the file name
                        //ie /api/user/*fileName.ext*
                        const uploadedPhotoName = imLink.substring(imLink.lastIndexOf("/") + 1, imLink.length)

                        // setImagesToShow([...imagesToShow], getImage(uploadedPhotoName))
                        getImage(uploadedPhotoName)
                            .then(img => {
                                console.log(img)
                                setCurrentImage(img)
                            })
                            .catch(err => console.error(err))

                        console.log("donezo")
                    })
                    .catch(err => console.log(err))
            }
        })
    }

    const handleChange = () => {
        console.log("im going through changes")
    }

    return (
        <>
            <img alt="You" src={currentImage} />
            <div>
                {imagesToShow.map(image =>
                    <img alt="uploaded jawn" src={image} />
                )}
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
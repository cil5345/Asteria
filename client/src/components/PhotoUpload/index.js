import React, { useState, useEffect } from "react"
import { useDropzone } from 'react-dropzone';
import "./style.css"
import { uploadPhoto, getImage } from "../../utils/API"

export default function PhotoUpload(props) {

    const [currentImage, setCurrentImage] = useState(props.imageLink)

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });

    const files = acceptedFiles.map(file =>{

        return (
            <div className="choosen-photo-div" key={file.path}>
                {file.name}
                <img alt="Selected Pic" src={URL.createObjectURL(file)}/>
            </div>
        )    
    }) 

    useEffect(() => {

        console.log("setting current image or setimagestoshow")
        
    }, [currentImage])

    const handleUpload = () => {
        console.log("clicked")
        //take files
        acceptedFiles.forEach(file => {
            //init reader then read the file
            const reader = new FileReader()
            //read out as base64
            reader.readAsDataURL(file)
            //on the end of load
            reader.onloadend = () => {
                //get extension
                const extension = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length)
                //send user id, file extension, and base64 encoding of image
                //in order to write the file and change imageLink field
                uploadPhoto(sessionStorage.getItem("fb_ID"), extension, reader.result)
                    .then(data => {
                        console.log(data.data)
                        //update imageLink in session with new imageLink
                        sessionStorage.setItem("imageLink", data.data)
                        console.log("need to focus on my brand")
                        setCurrentImage(sessionStorage.getItem("imageLink"))
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
            <img alt="You" id="current-image" src={currentImage} />
            <div className="photoUpload">
            <div className="derp" onChange={handleChange} {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                <span>Drag 'n' drop some files here</span>
                <div id="btn-div">
                    <button className="hi" onClick={open}>
                        Choose Image
                    </button>
                    <button onClick={handleUpload}>Upload Image</button>
                </div>
            </div>
                <aside>

                    {files.length ? <div id="files-div">{files}</div> : <h6>No photo choosen</h6>}

                </aside>
            </div>
        </>
    )
}
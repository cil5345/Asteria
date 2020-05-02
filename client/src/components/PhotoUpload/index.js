import React, { useState } from "react"
import { useDropzone } from 'react-dropzone';
import "./style.css"
import { uploadPhoto } from "../../utils/API"

export default function PhotoUpload(props) {


    // const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noKeyboard: true });
    // const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

    /*
    what needs to happen

    photo is dragged and dropped into drop area

    recognize the photo(s)

    post with form/submit
    */
    //we can recognize a photo on change
    //accept a few photos... 3
    //at some point the user will hit submit and we will post it


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

        // var fd = new FormData()

        // let it = 0

        acceptedFiles.forEach(file => {

            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onloadend = () => {
                // Do whatever you want with the file contents
                // fd.append(`theJuice_${it}`, )
                // fd.append(`File_${it}`, file, file.name)
                // console.log(file.name)
                // setImagesToShow([...imagesToShow], reader.result)

                

                uploadPhoto(sessionStorage.getItem("fb_ID"), file.name, reader.result)
                    .then(data => console.log(data))
                    .catch(err => console.log(err))


                // console.log(fd)
                // for (const f of fd) console.log(f)
            }
            // it++
            // reader.readAsArrayBuffer(file)
        })
        // console.log(fd)
    }

    const [formData, setFormData] = useState({})
    const [imagesToShow, setImagesToShow] = useState([])

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
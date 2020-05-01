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

        var fd = new FormData()

        let it = 0
        
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
                fd.append(`image${it}`, binaryStr)
            }
            it++
            reader.readAsArrayBuffer(file)
        })
        
        console.log(fd)
        
        // console.log(acceptedFiles[0])
        // let it = 0
        // for(const file of acceptedFiles) {
        //     console.log(file)
        //     fd.append(`image${it}`, file, file.name)
        //     console.log("crazy or excititing")
        //     it++
        // }
        
        uploadPhoto(sessionStorage.getItem("fb_ID"), fd)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const [ formData, setFormData ] = useState({})

    const handleChange = () => {
        console.log("im going through changes")
    }

    return (
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
    )
}
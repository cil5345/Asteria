import React from "react"
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

    return (
        <form action={(`/photo/upload/${sessionStorage.getItem("fb_ID")}`)} method="post" enctype="multipart/form-data">
            <div className="photoUpload">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                Drag 'n' drop some files here
                <button onClick={open}>
                        Open File Dialog
                </button>
                <button type="submit">Upload</button>
                </div>
                <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                </aside>
            </div>
        </form>
    )
}
import React from "react"
import { useDropzone } from 'react-dropzone';
import "./style.css"
import { uploadPhoto } from "../../utils/API"

export default function PhotoUpload(props) {


    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noKeyboard: true });
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

    /*
    what needs to happen

    photo is dragged and dropped into drop area

    recognize the photo(s)

    post with form/submit
    */
    //we can recognize a photo on change
    //accept a few photos... 3
    //at some point the user will hit submit and we will post it

    return (
        <section className="photoUpload">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                Dropzone
                
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    )
}
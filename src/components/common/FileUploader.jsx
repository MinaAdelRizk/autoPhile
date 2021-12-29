import React from 'react';
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const FileUploader = () => {

    const [files, setFiles] = useState([])

    const handleInputChange = (e) => {
        const { files } = e.target
        setFiles(files)
    };

    // async function handleSubmit(e) {


    //     const data = new FormData()
    //     for (let i = 0; i < files.length; i++) {
    //         data.append('file', files[i])
    //     }

    //     axios.post(apiEndPoint, data)
    //         .then(res => {
    //             toast.success(res.data)
    //             onSuccess(res.data)
    //         })
    //         .catch(ex => {
    //             toast.error("Something went wrong!")
    //         })
    // };

    return (

        <div>
            <label>Upload Images</label>

            <input
                type="file"
                onChange={handleInputChange}
                multiple
                className="form-control"
            >
            </input>
        </div>

    )

}
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, ModelAddForm } from '../Models/Models.styled';
import { GrAttachment } from 'react-icons/gr';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import "./AddModel.css"

const AddModel = () => {
    const { serverUrl, user } = useAuth()
    const history = useHistory();
    const [ Model_Name, setModel_Name ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ Type, setType ] = useState("");
    const [ User_Id, setUser_Id ] = useState("");
    const [ Format, setFormat ] = useState("");
    const [ Resource_Url, setResource_Url ] = useState("");
    const [ modelFile, setModelFile ] = useState({});

    const handleModelName = (e) =>{
        setModel_Name(e.target.value)
    }
    const handleModelDetails = (e) =>{
        setDescription(e.target.value)
    }
    const handleModelType = (e) =>{
        setType(e.target.value)
    }
    const handleUserId = (e) =>{
        setUser_Id(e.target.value)
    }
    const handleModelFormat = (e) =>{
        setFormat(e.target.value)
    }
    const handleModelUrl = (e) =>{
        setResource_Url(e.target.value)
    }



    const handleFile = (e) => {
        let files = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
           const fileData = { file: e.target.result }
            setModelFile(fileData)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { Model_Name, description, Type, User_Id, Format, Resource_Url, modelFile}
        axios.post(`${serverUrl}/models/create`, data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Added Successfully')
            }
        })
    history.push("/createprojects")
    }

    return (
        <>
            <ModelAddForm>
                {/* <h3>Add new model</h3>
                <Form>
                    <div>
                        <input type='text' placeholder='Upload Model Files' />
                        <GrAttachment />
                    </div>
                    <div>
                        <button>Upload</button>
                    </div>
                </Form>
                <Form>

                    <div>
                        <h4>Or</h4>
                    </div>
                </Form> */}
                <form >
                    <div>

                        <div className="row">
                            <div className="column">

                                <h3>Add Model Name</h3>
                                <input className="input-field" onBlur={handleModelName} type="text" placeholder='Model Name' /> <br />
                                <h3>Add Model Description</h3>
                                <input className="input-field"  onBlur={handleModelDetails} type="text" placeholder='Model Details' /><br />
                                <h3>Add Model Type</h3>
                                <input className="input-field"  onBlur={handleModelType} defaultValue="Original" /><br />
                            </div>
                            <div className="column">

                                <h3>Add User Id</h3>
                                <input className="input-field"  onBlur={handleUserId} type="text" placeholder='User Id' defaultValue={user.uid} /><br />
                                <h3>Add Model Format</h3>
                                <input className="input-field"  onBlur={handleModelFormat} placeholder='Model Format' /><br />
                                <h3>Add Model Url</h3>
                                <input className="input-field"  onBlur={handleModelUrl} type="url" placeholder='Source Url' /><br />
                                <h3>or</h3>
                                <h3>Upload Model</h3>
                                <input className="input-field"  type="file" onChange={handleFile} name="file" placeholder='Model File' /><br />
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <button className="submitButton" onClick={handleSubmit}>

                                Upload
                                </button>
</div>
                            <div className="column">
                                
                                <input className="resetButton" type="reset" /><br />
</div>
                        </div>
                    </div>
                </form>


            </ModelAddForm>
        </>
    );
};

export default AddModel;
















// const { register, handleSubmit, reset } = useForm();
// const history = useHistory();

// const onSubmit = data => {
//     console.log(data)
//     axios.post(`${serverUrl}/models/create`, data)
//         .then(res => {
//             console.log(res)
//             if (res.data.insertedId) {
//                 console.log("added", data)
//             }
//         })
//     alert('Added Successfully')
//     reset()
//     history.push("/createprojects")
// }




// <Form onSubmit={handleSubmit(onSubmit)}>
//     <div>

//         <div className="row">
//             <div className="column">

//                 <h3>Add Model Name</h3>
//                 <input {...register("Model_Name", { required: true })} placeholder='Model Name' /> <br />
//                 <h3>Add Model Descriptionl</h3>
//                 <input {...register("description", { required: true })} placeholder='Model Details' /><br />
//                 <h3>Add Model Type</h3>
//                 <input {...register("Type")} defaultValue="Original" /><br />
//             </div>
//             <div className="column">

//                 <h3>Add User Id</h3>
//                 <input {...register("User_Id", { required: true })} placeholder='User Id' defaultValue={user.uid} /><br />
//                 <h3>Add Model Format</h3>
//                 <input {...register("Format", { required: true })} placeholder='Model Format' /><br />
//                 <h3>Add Model Url</h3>
//                 <input type="url" {...register("Resource_Url", { required: true })} placeholder='Source Url' /><br />
//                 <br />
//                 <h3>Upload Model</h3>
//                 <input type="file" onChange={(e) => handleFile(e)} name="file" placeholder='Model File' /><br />
//                 <br />
//             </div>
//         </div>
//         <div className="row">
//             <div className="column">

//                 <input className="submitButton" type="submit" /><br />
//             </div>
//             <div className="column">

//                 <input className="resetButton" type="reset" /><br />
//             </div>
//         </div>
//     </div>
// </Form>

















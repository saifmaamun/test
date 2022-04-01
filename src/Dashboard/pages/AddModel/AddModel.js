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
    console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data)
        axios.post(`${serverUrl}/models/create`, data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    console.log("added", data)
                }
            })
        alert('Added Successfully')
        reset()
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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div>

                        <div className="row">
                            <div className="column">

                                <h3>Add Model Name</h3>
                                <input {...register("Model_Name", { required: true })} placeholder='Model Name' /> <br />
                                <h3>Add Model Descriptionl</h3>
                                <input {...register("description", { required: true })} placeholder='Model Details' /><br />
                                <h3>Add Model Type</h3>
                                <input {...register("Type")} defaultValue="Original" /><br />
                            </div>
                            <div className="column">

                                <h3>Add User Id</h3>
                                <input {...register("User_Id", { required: true })} placeholder='User Id' defaultValue={user.uid} /><br />
                                <h3>Add Model Format</h3>
                                <input {...register("Format", { required: true })} placeholder='Model Format' /><br />
                                <h3>Add Model Url</h3>
                                <input type="url" {...register("Resource_Url", { required: true })} placeholder='Source Url' /><br />
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                
                                <input className="submitButton" type="submit" /><br />
</div>
                            <div className="column">
                                
                                <input className="resetButton" type="reset" /><br />
</div>
                        </div>
                    </div>
                </Form>


            </ModelAddForm>
        </>
    );
};

export default AddModel;
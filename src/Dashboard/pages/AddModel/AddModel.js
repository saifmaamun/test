import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, ModelAddForm } from '../Models/Models.styled';
import { GrAttachment } from 'react-icons/gr';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const AddModel = () => {
    const { serverUrl, user } = useAuth()
    console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const history =useHistory();
    // const [name,setName]=useState("")
    // const [description,setDescription]=useState("")
    // const [url, setUrl] = useState("")
    
    // const hanldeName = (e) => {
    //     setName(e.target.value);
    // };
    // const hanldeDescription = (e) => {
    //     setDescription(e.target.value);
    // };
    // const hanldeUrl = (e) => {
    //     setName(e.target.value);
    // };

    const onSubmit = data => {
        console.log(data)
        axios.post(`${serverUrl}/models/create`, data)
        .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    console.log("added",data)
                }
            })
            alert('Added Successfully')
            reset()
        history.push("/createprojects")
    }


    return (
        <>
            <ModelAddForm>
                <h3>Add new model</h3>
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
                </Form>
                <Form onSubmit={handleSubmit(onSubmit)}>    
                    <input {...register("Model_Name", { required: true })} placeholder='Name' /> 

                    <input {...register("description", { required: true })} placeholder='Details' />
                    <input {...register("Type", { required: true })} defaultValue="Original" />
                    <input {...register("User_Id", { required: true })} defaultValue={user.uid} />
                        
                    <input type="url" {...register("Resource_Url", { required: true })} placeholder='Source Url' />
                         
                            
                   
                        
                  
                                <input type="submit" />
                    

                                <input type="reset" />
                </Form>
                {/* <input onBlur={hanldeName} className="w-100 py-3 rounded border-info" type="email" placeholder="Email" />
                <br />
                <br />
                <input onBlur={hanldeDescription} type="password" placeholder="Password" />
                <br />
                <br />
                <input onBlur={hanldeUrl} type="url" placeholder="Url" />
                <br />
                <button variant="contained" onClick={handleUpload} >Log In</button> */}


            </ModelAddForm>
        </>
    );
};

export default AddModel;
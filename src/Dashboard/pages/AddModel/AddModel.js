import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, ModelAddForm } from '../Models/Models.styled';
import { GrAttachment } from 'react-icons/gr';
import useAuth from '../../../hooks/useAuth';

const AddModel = () => {
    const { serverUrl, localUrl } = useAuth()
    const { register, handleSubmit, reset } = useForm();
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
        axios.post(`${localUrl}/models`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset()
                }
            })
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
                        
                    
                        
                    <input {...register("name", { required: true })} placeholder='Name' /> <br />
                         

                    
                    <input {...register("description", { required: true })} placeholder='Details' /> <br />
                      
                        
                    <input type="url" {...register("url", { required: true })} placeholder='Source Url' /> <br />
                         
                            
                   
                        
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
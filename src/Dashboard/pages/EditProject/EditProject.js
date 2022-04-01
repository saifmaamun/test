import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from "axios";
import "@google/model-viewer/dist/model-viewer";
import './EditProject.css';

const EditProject = () => {
    const {user,serverUrl } = useAuth();

    const { id } = useParams();
    const [project, setProject] = useState();
    const [model, setModel] = useState();
    const { link, setLink }=useState('')
    
    
    
    
    
    useEffect(() => {
        fetch(`${serverUrl}/projects/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
    }, [])
    useEffect(() => {
        if (project) {
            
            fetch(`${serverUrl}/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
            fetch(`${serverUrl}/models/${project.Model_Id}`)
            .then(res => res.json())
                .then(data => setModel(data))
            const url = `${serverUrl}/publishProject/${user.displayName}/${project.Project_Name}/glb`
            
        }
    }, [project])
    // console.log("project",project)
    // console.log("model",model)

// publish link
    const url = `${serverUrl}/publishProject/${user.displayName}/${project?project.Project_Name:''}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    console.log(url,user)

    const generate = () => {
        // "/publishProject/:user/:project/:format"
        // useEffect(() => {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => console.log(data))
        // }, [])
        console.log(link)

    }


    return (
        
        <div className="row">
            <div className="column">
            <div>
                <model-viewer
                    style={{ width: '500px', height: '800px' }}
                    src={model ? model.Resource_Url : ""}
                    ios-src=""
                    poster=""
                    alt="A 3D model of an astronaut"
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate
                    ar
                    ></model-viewer>
            </div>
            </div>
            <div className="column">

        <h2>want to share??</h2>    
                {/* <button onClick={() => generate()}>generate link</button> */}
                <input className="inputFeild" type="text" name="Link" value={ url} id="" />
            </div>


        </div>
    );
};

export default EditProject;
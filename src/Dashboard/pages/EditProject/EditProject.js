import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from "axios";
// import "@google/model-viewer/dist/model-viewer";

const EditProject = () => {
    const {  serverUrl } = useAuth();
    
    const { id } = useParams();
    // const [project, setProject] = useState();
    // const [model, setModel] = useState();
    
    //
    // const show = () => {
        
    //     const userProject = {
    //         user: 'saif',
    //     project: 'waterBottles',
    //     format: 'glb',
    // };
    
    // console.log(userProject);
    
    // try {
    //     const res = axios.post(
    //         "http://localhost:3001/",
    //         userProject
    //         );
    //         console.log(res);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    
    const user = "saif";
    const project = "waterBottles";
    const format = "glb";
    console.log(user, project, format)

    //
    
    
    
    // useEffect(() => {
    //     fetch(`${serverUrl}/projects/${id}`)
    //     .then(res => res.json())
    //     .then(data => setProject(data))
    // }, [])
    // useEffect(() => {
    //     if (project) {
            
    //         fetch(`${serverUrl}/projects/${id}`)
    //         .then(res => res.json())
    //             .then(data => setProject(data))
    //         fetch(`${serverUrl}/models/${project.Model_Id}`)
    //             .then(res => res.json())
    //             .then(data => setModel(data))
    //     }
    //     }, [project])
    // console.log("project",project)
    // console.log("model",model)

    return (
        <div>
            
            {/* <p> {project ? project.Model_Id : ""} </p>
            <p> {model ? model.Resource_Url : ""} </p>
            <a href={model ? model.Resource_Url : ""} target="_blank" rel="noopener noreferrer"> click me</a> */}
            {/* <div>
                <button onClick={() =>show()}>show</button>
            </div> */}
            <div>
                <model-viewer
                    src={`https://raw.githubusercontent.com/prajwalj27/ar-model-viewer/main/server/3d-models/${user}/${project}/scene.${format}`}
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
    );
};

export default EditProject;
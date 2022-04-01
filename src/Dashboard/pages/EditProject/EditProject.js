import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from "axios";
import "@google/model-viewer/dist/model-viewer";

const EditProject = () => {
    const {serverUrl } = useAuth();
    
    const { id } = useParams();
    const [project, setProject] = useState();
    const [model, setModel] = useState();
    
    
    
    
    
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
        }
    }, [project])
    // console.log("project",project)
    // console.log("model",model)

    return (
        <div>
            
            <p> {project ? project.Project_Name : ""} </p>
            <p> {project ? project.Model_Id : ""} </p>
            <p> {model ? model.Resource_Url : ""} </p>
            <p> {model ? model.Resource_Url : ""} </p>
            
            
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
    );
};

export default EditProject;
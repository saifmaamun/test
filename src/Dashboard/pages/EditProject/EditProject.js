import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const EditProject = () => {
    const { user, serverUrl } = useAuth();
    
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
    console.log("project",project)
    console.log("model",model)

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default EditProject;
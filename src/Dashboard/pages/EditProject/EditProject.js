import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const EditProject = () => {
    const { user, serverUrl } = useAuth();
    
    const { id } = useParams();
    const [project, setProject] = useState([]);
    
    
    
    
    
    useEffect(() => {
        fetch(`${serverUrl}/projects/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
    }, [])
    console.log("project",project)

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default EditProject;
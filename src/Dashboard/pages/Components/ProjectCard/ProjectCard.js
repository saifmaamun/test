import { ProjectCardWrapper, StatusSpan } from './ProjectCard.styled';
import ProductImage from './img/product.png';
import { useHistory } from 'react-router-dom';
import EditProject from '../../EditProject/EditProject';


import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, projectId, projectName, thumbnail, description, userId, modelId, templateId, status, onDelete }) => {
  console.log(id, modelId);


  const history =useHistory()

  const onEdit = () => {
    history.push(`/editproject/${id}`);
  };

  
  return (
    <ProjectCardWrapper>
      <img height="200" src={thumbnail} alt='Product ' />
      <h1>{projectName}</h1>
      <StatusSpan status={status}>{status}</StatusSpan>
      <p>{description}</p>
      <div>


        
        <button onClick={() => onEdit()}>Edit</button>
      
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
        </ProjectCardWrapper>
  );
};

export default ProjectCard;

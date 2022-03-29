import { ProjectCardWrapper, StatusSpan } from './ProjectCard.styled';
import ProductImage from './img/product.png';
import { useHistory } from 'react-router-dom';

const ProjectCard = ({ id, projectName, thumbnail,description,userId, modelId, templateId, status, onDelete}) => {
  const history =useHistory()

  const onEdit = () => {
    alert(id);
    history.push("/editproject");
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

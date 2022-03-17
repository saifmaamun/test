import { ProjectCardWrapper, StatusSpan } from './ProjectCard.styled';
import ProductImage from './img/product.png';
const ProjectCard = ({ id, name, description, status, onEdit, onDelete }) => {
  return (
    <ProjectCardWrapper>
      <img src={ProductImage} alt='Product ' />
      <h1>{name}</h1>
      <StatusSpan status={status}>{status}</StatusSpan>
      <p>{description}</p>
      <div>
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;

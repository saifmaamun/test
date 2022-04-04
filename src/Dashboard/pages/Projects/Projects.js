import { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { DropDownContainer } from '../Dashboard/Dashboard.styled';
import { Col25, DropDown, Row } from '../../../styles/utils.styled';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import {
  MenubarContainer,
  SearchBarContainer,
  FilterContainer,
  ProjectsContainer,
  DeletePopup,
  ModelContainer,
} from './Projects.styled';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Projects = () => {
  const { serverUrl, user } = useAuth()
  
  const [projects, setProjects] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${serverUrl}/projects/getAll`)
      .then(res => res.json())
      // .then(data => setProjects(data.reverse()))
    

      .then(data => {
        const added = data.filter(items => items.User_Id === user.uid)
        setProjects(added.reverse())
      })
    }, [projects])
  

  // console.log(user.uid, projects.User_Id)




  // const onEdit = (id) => {
  //   console.log('Edit project', id);
  //   setCurrentId(id);
  //   alert(id);
  // };
  const [currentId, setCurrentId] = useState(null);

  const [isPopupOpen, setPopupOpen] = useState(false);

 
  const onDelete = (id) => {
    setCurrentId(id);
    setPopupOpen(true);
  };
  const deleteConfirm = () => {
    // Remove a particular project from the list
    const newProjects = projects.filter((project) => project._id !== currentId);
    setProjects(newProjects);
    setPopupOpen(false);
  };

  return (
    <>
      <MenubarContainer>
        <SearchBarContainer>
          <FaSearch />
          <input type='text' placeholder='Search' />
        </SearchBarContainer>
        <FilterContainer>
          <DropDownContainer>
            <DropDown>
              <select>
                <option>ALL</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </DropDown>
            <DropDown>
              <select>
                <option>ALL</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </DropDown>
          </DropDownContainer>
        </FilterContainer>
      </MenubarContainer>

      <ProjectsContainer>
        <Row>
          {projects.map((project) => (
            <Col25 key={project._id}>
              <ProjectCard
                key={project._id}
                id={project._id}
                projectName={project.Project_Name}
                thumbnail={project.Thumbnail}
                description={project.Description}
                projectId={project.Project_Id}
                userId={project.User_Id}
                modelId={project.Model_Id}
                templateId={project.Template_Id}
                status={project.Status}
                onDelete={onDelete}
              />
            </Col25>
          ))}
        </Row>
        <DeletePopup show={isPopupOpen}>
          <ModelContainer>
            <FaTimes onClick={() => setPopupOpen(false)} />
            <div>
              <p>Are you sure you want to delete ?</p>
              <div>
                <button onClick={() => deleteConfirm()}>Yes</button>
                <button onClick={() => setPopupOpen(false)}>No</button>
              </div>
            </div>
          </ModelContainer>
        </DeletePopup>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

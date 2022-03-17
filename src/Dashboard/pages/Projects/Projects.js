import { useState } from 'react';
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

const Projects = () => {
  const initialProjects = [
    {
      id: 1,
      name: 'Model.fabricatear.com',
      status: 'Published',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 5,
      name: 'Model.fabricatear.com',
      status: 'Disabled',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 6,
      name: 'Model.fabricatear.com',
      status: 'Draft',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 2,
      name: 'Model.fabricatear.com',
      status: 'Published',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 3,
      name: 'Model.fabricatear.com',
      status: 'Published',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 4,
      name: 'Model.fabricatear.com',
      status: 'Draft',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 7,
      name: 'Model.fabricatear.com',
      status: 'Published',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 8,
      name: 'Model.fabricatear.com',
      status: 'Disabled',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 9,
      name: 'Model.fabricatear.com',
      status: 'Published',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
    {
      id: 10,
      name: 'Model.fabricatear.hello',
      status: 'Disabled',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
    },
  ];
  const [projects, setProjects] = useState(initialProjects);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const onEdit = (id) => {
    console.log('Edit project', id);
    setCurrentId(id);
    alert(id);
  };
  const onDelete = (id) => {
    setCurrentId(id);
    setPopupOpen(true);
  };
  const deleteConfirm = () => {
    // Remove a particular project from the list
    const newProjects = projects.filter((project) => project.id !== currentId);
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
          {projects.map(({ id, status, name, description }) => (
            <Col25 key={id}>
              <ProjectCard
                id={id}
                status={status}
                name={name}
                description={description}
                onEdit={onEdit}
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

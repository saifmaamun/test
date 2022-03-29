import { Form, ModelAddForm, ModelsContainer } from './Models.styled';
import { Col20, Row } from '../../../styles/utils.styled';
import Model from '../Components/Model/Model';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Models = () => {
  const { serverUrl,localUrl}=useAuth()
  const [models, setModels] = useState([])
  
  useEffect(() => {
    fetch(`${localUrl}/models/getAll`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setModels(data))
  }, [])
  

  // const modelsData = [
  //   {
  //     id: 1,
  //     name: 'Model 1',
  //   },
  //   {
  //     id: 2,
  //     name: 'Model 1',
  //   },
  //   {
  //     id: 3,
  //     name: 'Model 1',
  //   },
  //   {
  //     id: 4,
  //     name: 'Model 1',
  //   },
  //   {
  //     id: 5,
  //     name: 'Model 1',
  //   },
  //   {
  //     id: 6,
  //     name: 'Model 1',
  //   },
  //   {
  //     id: 7,
  //     name: 'Model 1',
  //   },
  //   {
  //     id: 8,
  //     name: 'Model 1',
  //   },
  // ];
  return (
    <>
      <ModelsContainer>
        <Row>
          {models.map((model) => (
            <Col20 key={model._id}>
              <Model model={model} id={model._id} />
            </Col20>
          ))}
        </Row>
      </ModelsContainer>
    </>
  );
};

export default Models;

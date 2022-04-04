import { Form, ModelAddForm, ModelsContainer } from './Models.styled';
import { Col20, Row } from '../../../styles/utils.styled';
import Model from '../Components/Model/Model';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Models = () => {
  const { serverUrl,user}=useAuth()
  const [models, setModels] = useState([])
  
  useEffect(() => {
    fetch(`${serverUrl}/models/getAll`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => { 
        const added = data.filter(items => items.User_Id === user.uid)
        setModels(added)
      })
  }, [])
  console.log(models);

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

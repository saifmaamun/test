import { Form, ModelAddForm, ModelsContainer } from './Models.styled';
import { Col20, Row } from '../../../styles/utils.styled';
import Model from '../Components/Model/Model';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaSearch, FaTimes } from 'react-icons/fa';
import {
  DeletePopup,
  ModelContainer,
} from './Models.styled';

const Models = () => {
  const { serverUrl,user}=useAuth()
  const [models, setModels] = useState([])
  
  useEffect(() => {
    fetch(`${serverUrl}/models/getAll`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => { 
        // setModels(data)
        const added = data.filter(items => items.User_Id === user.uid)
        setModels(added.reverse())
      })
  }, [models])



  const [currentId, setCurrentId] = useState(null);

  const [isPopupOpen, setPopupOpen] = useState(false);


  const onDelete = (id) => {
    setCurrentId(id);
    setPopupOpen(true);
  };
  const deleteConfirm = () => {
    fetch(`${serverUrl}/models/deleteModel/${currentId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          const remaining = models.filter(model => model._id !== currentId)
          setModels(remaining)
          setPopupOpen(false);
        }
      })
  };








  return (
    <>
      <ModelsContainer>
        <Row>
          {models.map((model) => (
            <Col20 key={model._id}>
              <Model
                model={model}
                id={model._id}
                onDelete={onDelete}
              />
            </Col20>
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
      </ModelsContainer>
    </>
  );
};

export default Models;

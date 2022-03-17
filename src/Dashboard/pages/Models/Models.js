import { Form, ModelAddForm, ModelsContainer } from './Models.styled';
import { GrAttachment } from 'react-icons/gr';
import { Col20, Row } from '../../../styles/utils.styled';
import Model from '../Components/Model/Model';

const Models = () => {
  const modelsData = [
    {
      id: 1,
      name: 'Model 1',
    },
    {
      id: 2,
      name: 'Model 1',
    },
    {
      id: 3,
      name: 'Model 1',
    },
    {
      id: 4,
      name: 'Model 1',
    },
    {
      id: 5,
      name: 'Model 1',
    },
    {
      id: 6,
      name: 'Model 1',
    },
    {
      id: 7,
      name: 'Model 1',
    },
    {
      id: 8,
      name: 'Model 1',
    },
  ];
  return (
    <>
      <ModelAddForm>
        <h3>Add new model</h3>
        <Form>
          <div>
            <input type='text' placeholder='Upload Model Files' />
            <GrAttachment />
          </div>
          <div>
            <h4>Or</h4>
          </div>
          <div>
            <input type='url' placeholder='Upload Link' />
          </div>
          <div>
            <button>Upload</button>
          </div>
        </Form>
      </ModelAddForm>
      <ModelsContainer>
        <Row>
          {modelsData.map(({ id, name, description }) => (
            <Col20 key={id}>
              <Model name={name} description={description} id={id} />
            </Col20>
          ))}
        </Row>
      </ModelsContainer>
    </>
  );
};

export default Models;

import { ModelWrapper } from './Model.styled';
import ProductImage from './img/product.png';

const Model = ({ model, onDelete }) => {
  const { _id, User_Id, Model_Name, Type, Resource_Url } = model
  return (
    <ModelWrapper>
      <img height="200"  alt='Model' />
      <h3>{Model_Name}</h3>
      <p>description</p>
      <div>
        <button>Start Project</button>
        <button onClick={() => onDelete(_id)}> Delete</button>
        {/* <button onClick={() => handlePreviewClick()}>Preview</button> */}
      </div>
    </ModelWrapper>
  );
};

export default Model;

import { ModelWrapper } from './Model.styled';
import ProductImage from './img/product.png';

const Model = ({ model }) => {
  const { _id, User_Id, Model_Id, Type, Resource_Url }=model
  console.log(_id, User_Id, Model_Id, Type, Resource_Url)
  // const handlePreviewClick = () => {
  //   preview(_id);
  // };
  console.log(_id);
  return (
    <ModelWrapper>
      <img height="200"  alt='Model' />
      <h3>name</h3>
      <p>description</p>
      <div>
        <button>Start Project</button>
        {/* <button onClick={() => handlePreviewClick()}>Preview</button> */}
      </div>
    </ModelWrapper>
  );
};

export default Model;

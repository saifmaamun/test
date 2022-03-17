import { ModelWrapper } from './Model.styled';
import ProductImage from './img/product.png';

const Model = ({ id, name, description, preview }) => {
  const handlePreviewClick = () => {
    preview(id);
  };
  return (
    <ModelWrapper>
      <img src={ProductImage} alt='Model' />
      <h3>{name ?? ''}</h3>
      <p>{description ?? ''}</p>
      <div>
        <button>Start Project</button>
        <button onClick={() => handlePreviewClick()}>Preview</button>
      </div>
    </ModelWrapper>
  );
};

export default Model;

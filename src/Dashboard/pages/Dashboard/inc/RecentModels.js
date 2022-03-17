import styled from 'styled-components';
import YellowHelmet from '../../../../images/YellowHelmet.webp';
import RainCoat from '../../../../images/RainCoat.webp';

export const ProductWrapper = styled.div`
  display: flex;
`;

export const ProductCard = styled.div`
  background: white;
  box-shadow: 0px 2px 22px #dce3ea;
  width: 50%;
  padding: 15px;
  border-radius: 10px;
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  margin-right: 15px;

  img {
    width: 100%;
    background: ${({ theme }) => theme.colors.primary_blue};
    border-radius: 10px;
  }
  h3 {
    font-size: 1.2rem;
    margin-left: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-bottom: 0;
    margin-top: 10px;
  }
  h5 {
    font-size: 0.8rem;
    margin-left: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-top: 5px;
    margin-bottom: 0;
  }
  div {
    transition: 0.3s ease-in-out all;
    opacity: 0;
    height: 0;
    p {
      font-size: 0.9rem;
      margin-left: 15px;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      margin-top: 10px;
    }
    button {
      display: block;
      font-size: 1rem;
      width: 90%;
      margin: auto;
      margin-top: 15px;
      background: ${({ theme }) => theme.colors.light_blue};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 15px 20px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  &:hover {
    div {
      opacity: 1;
      height: auto;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% / 2);
    flex: 2 0 20%;
    margin-bottom: 15px;
    img {
      border-radius: 5px;
    }
    h3 {
      font-size: 1rem;
      margin-right: 5px;
    }
    h5 {
      font-size: 0.7rem;
      margin-right: 5px;
    }
    div {
      p {
        font-size: 0.7rem;
        margin-right: 5px;
      }
      button {
        font-size: 0.7rem;
        padding: 5px 10px;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
    flex: 2 0 40%;
    margin-bottom: 15px;
    img {
      border-radius: 5px;
    }
    h3 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1rem;
    }
    div {
      p {
        font-size: 1rem;
      }
      button {
        font-size: 1rem;
      }
    }
  }
`;

const RecentModels = () => {
  return (
    <ProductWrapper>
      <ProductCard>
        <img src={RainCoat} alt='Coat' />
        <h3>Coat</h3>
        <h5>Customized</h5>
      </ProductCard>

      <ProductCard>
        <img src={YellowHelmet} alt='Yellow Football Helmet' />
        <h3>Yellow Football Helmet</h3>
        <h5>Customized</h5>
      </ProductCard>
    </ProductWrapper>
  );
};

export default RecentModels;

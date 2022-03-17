import styled, { keyframes } from 'styled-components';
import { DeletePopup } from '../Projects/Projects.styled';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  },
  to {
    transform: translateY(0);
  }

`;

export const SelecterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 15px 5px;
  }
`;
export const Selector = styled.div`
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  width: 48%;
  border-radius: 20px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  img {
    height: 150px;
  }
  h3 {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin: 0;
  }
  h1 {
    font-size: 35px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 15px 10px;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    img {
      width: 100%;
      height: auto;
    }
    h3 {
      font-size: 14px;
      text-align: left;
    }
    h1 {
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const TemplateContainer = styled.div``;

export const Chooser = styled.div`
  transition: 2s ease all;
  animation: ${slideIn} 0.2s ease-in-out;

  text-align: center;
  width: 100%;
  h3 {
    font-size: 28px;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary_blue};
    margin: 20px 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    h3 {
      font-size: 1rem;
      margin: 10px 0;
    }
  }
`;
export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div {
    background: #e8eafe;
    border-radius: 10px;
    width: 30%;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
    }
    h5 {
      font-size: 16px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      margin: 0;
      margin-top: 5px;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    div {
      width: 48%;
      margin: 5px 0;
      padding: 5px 0;
      img {
        width: 30px;
        height: 30px;
      }
      h5 {
        font-size: 10px;
      }
    }
  }
`;

export const FilterConnection = styled.div`
  width: 100%;
  margin: 15px;

  h1 {
    font-size: 25px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    width: max-content;
    display: flex;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0;
    h1 {
      font-size: 1rem;
    }
  }
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  align-items: center;
  svg {
    color: white;
    background: red;
    padding: 5px;
    border-radius: 50%;
    margin-left: 5px;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 15px;
    svg {
      padding: 2px;
    }
  }
`;

export const PreviewPopup = styled(DeletePopup)`
  & > div {
    padding: 75px;
    top: 15%;
    text-align: left !important;
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > div {
      padding: 50px 25px;
      top: 5%;
    }
  }
`;

export const Preview = styled.div`
  img {
    width: 100%;
  }
  text-align: left !important;
  h1 {
    font-size: 36px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-align: left;
  }
  p {
    font-size: 16px !important;
    font-weight: ${({ theme }) => theme.fontWeight.regular} !important;
    text-align: left;
  }
  button {
    padding: 10px 25px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.primary_blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.125rem;
    border-radius: 5px;
    cursor: pointer;
    text-align: left;
    &:hover {
      opacity: 0.8;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.7rem !important;
    }
    button {
      padding: 5px 10px;
      font-size: 1rem;
    }
  }
`;

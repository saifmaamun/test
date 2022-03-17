import styled from 'styled-components';

export const ModelAddForm = styled.div`
  background: white;
  padding: 15px 50px;
  h3 {
    font-size: 26px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 15px 20px;
    h3 {
      font-size: 1rem;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  div {
    margin: 0 10px;
    position: relative;
    input {
      text-indent: 15px;
      border: 1px solid ${({ theme }) => theme.colors.light_grey};
      font-size: 20px;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      padding: 15px;
      border-radius: 5px;
      width: 500px;
    }
    svg {
      font-size: 1.25rem;
      position: absolute;
      top: 33%;
      right: 15px;
    }
    h4 {
      font-size: 1.75rem;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
    button {
      padding: 10px 25px;
      border: none;
      outline: none;
      background: ${({ theme }) => theme.colors.primary_blue};
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.25rem;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    div {
      margin: 0 10px;
      position: relative;
      input {
        text-indent: 5px;
        border: 0.5px solid ${({ theme }) => theme.colors.light_grey};
        font-size: 0.8rem;
        width: 250px;
      }
      svg {
        font-size: 1rem;
      }
      h4 {
        font-size: 1.25rem;
        margin: 5px 0;
      }
      button {
        margin-top: 15px;
        padding: 5px 15px;
        font-size: 1rem;
      }
    }
  }
`;

export const ModelsContainer = styled.div``;

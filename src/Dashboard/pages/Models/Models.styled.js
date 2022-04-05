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

export const DeletePopup = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModelContainer = styled.div`
  position: fixed;
  background: white;
  width: 45%;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  border-radius: 10px;
  padding: 100px 30px;

  svg {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 1.5rem;
    color: #bcbec6;
    cursor: pointer;
  }
  div {
    text-align: center;
    p {
      font-size: 2.0625rem;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 50%;
      margin: auto;
      button {
        border: 1px solid ${({ theme }) => theme.colors.primary_blue};
        border-radius: 5px;
        padding: 10px 15px;
        outline: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        width: 45%;
        curosr: pointer;
        :first-child {
          background: ${({ theme }) => theme.colors.primary_blue};
          color: white;
        }
        :last-child {
          background: white;
          color: #000;
          border: 1px solid #000;
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    top: 25%;
    padding: 50px 15px;
    svg {
      font-size: 1rem;
    }
    div {
      p {
        font-size: 1.5rem;
      }
      div {
        width: 70%;
      }
    }
  }
`;


export const ModelsContainer = styled.div``;

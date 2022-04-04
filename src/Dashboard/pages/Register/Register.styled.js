import styled from "styled-components";

export const RegisterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

export const RegisterFormContainer = styled.div`
  width: 510px;
  background: white;
  padding: 15px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 24px;
    text-align: center;
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  h4 {
    text-align: center;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export const RegisterForm = styled.div`
  display: block;
  min-width: 450px;
  max-width: 90%;
  margin-top: 25px;
  button {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    background: ${({ theme }) => theme.colors.primary_blue};
    padding: 7px 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .googleButton {
    color: black;
    background: #ffffff;
    border: 1px solid #ebebeb;
    padding: 7px 0;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    img {
      width: 25px;
      margin-right: 15px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
    span {
      font-size: 13px;
      color: red;
      display: none;
  }

  input:invalid[focused="true"] ~ span {
    // background-color: #ffdddd;
    display: block;
  }

  input:invalid[focused="true"] ~ .eyeIcon {
    position: absolute;
    left: 90%;
    bottom: 75px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const FormGroup = styled.div`
  margin-top: 10px;
  position: relative;
  label {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    span {
      color: ${({ theme }) => theme.colors.primary_blue};
    }
  }
  input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

export const LoginButtons = styled.div`
  dipslay: flex;
  flex-direction: column;
  text-align: center;
`;

export const OrDivider = styled.div`
  margin: 10px 0;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 1.25rem;
  span {
    display: block;
    height: 1px;
    width: 40%;
    margin: auto;
    background: lightgrey;
    border-radius: 25px;
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  left: 90%;
  bottom: 16%;
  font-size: 20px;
  cursor: pointer;
`;


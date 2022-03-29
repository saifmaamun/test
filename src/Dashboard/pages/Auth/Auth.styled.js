import styled from 'styled-components';

export const AuthWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;
export const LoginFormContainer = styled.div`
  background: white;
  padding: 45px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 24px;
    text-align: center;
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  p {
    font-size: 16px;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: #00000026;
  }
  h4 {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    span {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.primary_blue}
      margin-right:5px;
      cursor:pointer;
    }
  }
`;
export const LoginForm = styled.div`
  display: block;
  min-width: 450px;
  max-width: 90%;
  margin-top: 25px;
`;
export const FormGroup = styled.div`
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
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    height: 50px;
    margin-bottom: 15px;
  }
`;
export const LoginButtons = styled.div`
  dipslay: flex;
  flex-direction: column;
  text-align: center;
`;
export const Button = styled.div`
  background: ${({ theme }) => theme.colors.primary_blue};
  padding: 10px 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
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
export const GoogleButton = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;
  padding: 10px 0;
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
`;
export const FacebookButton = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;
  padding: 10px 0;
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
`;

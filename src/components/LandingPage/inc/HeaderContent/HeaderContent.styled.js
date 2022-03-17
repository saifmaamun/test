import styled from 'styled-components';

export const HeaderContentWrapper = styled.div``;

export const HeaderContentArea = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    flex-flow: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-flow: column;
  }
`;

export const LeftContent = styled.div`
  display: block;
  width: 44%;
  p {
    font-size: 2.6875rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.white};
    span {
      text-decoration: underline;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    p {
      font-size: 1.5rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    p {
      font-size: 2rem;
    }
  }
`;
export const RightContent = styled.div`
  display: block;
  width: 56%;
  img {
    width: 80%;
    margin-left: 20%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
`;
export const EmailSignUp = styled.div`
  background-color: #9495e3;
  border-radius: 8px;
  display: flex;
  flex: 1;
  padding: 7px 10px;

  input {
    width: 80%;
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    background: transparent;
    border: none;
    outline: none;
    &::placeholder {
      color: white;
      font-size: 1.25rem;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary_orange};
    color: white;
    border-radius: 8px;
    border-style: none;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 7px 10px;
    min-width: 150px;
    cursor: pointer;
    height: 49px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 5px 7px;
    input {
      font-size: 0.8rem;
      &::placeholder {
        font-size: 0.8rem;
      }
    }
    button {
      font-size: 0.8rem;
      padding: 5px 7px;
      min-width: 100px;
      height: 35px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 80%;
    padding: 5px 7px;
  }
`;

export const JoinNowArea = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 125px;
  text-align: center;
  span {
    display: block;
    width: 60%;
    height: 1px;
    background: ${({ theme }) => theme.colors.white}29;
    margin-bottom: 25px;
    margin-top: -30px;
  }
  h1 {
    font-size: 2.625rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.yellow_text};
    margin: 0;
  }

  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.375rem;
    margin: 10px 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin: auto;
    h1 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
    margin: auto;
    span {
      margin-top: -40px;
    }
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
  }
`;

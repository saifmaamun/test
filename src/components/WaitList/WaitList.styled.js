import styled from 'styled-components';

export const FullGrayBg = styled.div`
  background-color: ${({ another }) => (another ? '#e3e3e3' : '#f9f9f9')};
`;

export const WaitListContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
  }
`;
export const WaitListContent = styled.div`
  text-align: center;
  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
    span {
      text-decoration: underline;
      display: block;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-style: italic;
    color: #9db1bc;
    width: 70%;
    margin: auto;
  }
  button {
    margin: 25px auto;
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.primary_orange};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: 10px 25px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
      width: 90%;
    }
    button {
      font-size: 1rem;
      padding: 7px 15px;
      border-radius: 5px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.25rem;
      width: 90%;
    }
    button {
      font-size: 1.25rem;
    }
  }
`;

export const PowerOfARSection = styled.div`
  background-color: #f9f9f9;
  padding: 120px 0;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 50px 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 50px 0;
  }
`;
export const ARContent = styled.div`
  background: white;
  width: 80%;
  margin-left: 20%;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  background-color: white;
  box-shadow: -7px 2px 12px -5px rgba(0, 0, 0, 0.25);
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    margin-left: 10%;
    flex-flow: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
    margin-left: 10%;
  }
`;
export const LeftContent = styled.div`
  padding: 40px 50px;
  width: 60%;
  h1 {
    font-size: 2.1875rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    width: 100%;
  }
  p {
    font-size: 1.4375rem;
    color: #9db1bc;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px 30px;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 20px 30px;
    width: 60%;
    h1 {
      font-size: 2rem;
      width: 100%;
    }
    p {
      font-size: 1.25rem;
      width: 100%;
      br {
        display: none;
      }
    }
  }
`;
export const RightContent = styled.div`
  width: 50%;
  background-color: #5e5ccd;
  position: relative;
  img {
    position: absolute;
    width: 130%;
    right: 0;
    top: -150px;
    bottom: 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    img {
      position: relative;
      width: 100%;
      top: -70px;
      margin-bottom: -50px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    img {
      width: 130%;
      top: 50px;
    }
  }
`;

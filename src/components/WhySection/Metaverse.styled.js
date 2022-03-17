import styled from 'styled-components';
import { JoinNowArea } from '../LandingPage/inc/HeaderContent/HeaderContent.styled';

export const MetaverseStyled = styled.div`
  background-color: #5e5ccd;
  position: relative;
  text-align: center;
  margin-top: -7px;
  .TopRight {
    width: 20vw;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .BottomLeft {
    width: 20vw;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 0;
    .TopRight,
    .BottomLeft {
      width: 50%;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    .TopRight,
    .BottomLeft {
      width: 50%;
    }
  }
`;

export const TimerContainer = styled(JoinNowArea)`
  h1 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    margin: auto;
    margin-top: -25px;
    margin-bottom: -25px;
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
    margin: auto;
    margin-top: -25px;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  padding: 50px 0;
  text-align: center;
  h1 {
    font-size: 2.375rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: #fff;
    span {
      font-style: italic;
    }
  }
  button {
    width: fit-content;
    background-color: #ff6e00;
    color: white;
    border-radius: 8px;
    border-style: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 7px 25px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 25px 0;
    h1 {
      font-size: 1.5rem;
    }
    button {
      font-size: 0.9rem;
      padding: 7px 15px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 25px 0;
    h1 {
      font-size: 2rem;
    }
    button {
      font-size: 1.25rem;
    }
  }
`;

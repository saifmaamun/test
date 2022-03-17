import styled from 'styled-components';
import { SectionTitle as OldSectionTitle } from './Examples.styled';

export const FreeDemoStyled = styled.div`
  background-color: #1d2353;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 75px 0;
  .TopRight {
    width: 250px;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .BottomLeft {
    width: 250px;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    .TopRight,
    .BottomLeft {
      width: 150px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    .TopRight,
    .BottomLeft {
      width: 30%;
    }
  }
`;

export const EmailSignUp = styled.div`
  background-color: #ffffff4d;
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
    width: 80%;
    margin: auto;
    padding: 5px 7px;
    input {
      font-size: 1rem;
      &::placeholder {
        font-size: 1rem;
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
    width: 70%;
    margin: auto;
    input {
      font-size: 1.25rem;
      &::placeholder {
        font-size: 1.25rem;
      }
    }
    button {
      font-size: 1.25rem;
    }
  }
`;

export const SectionTitle = styled(OldSectionTitle)`
  color: white;
  margin-bottom: 25px;
`;

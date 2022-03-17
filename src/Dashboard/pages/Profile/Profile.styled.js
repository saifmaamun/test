import styled from 'styled-components';
import { Card } from '../../../styles/utils.styled';

export const ProfileCard = styled(Card)`
  padding: 30px 30px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  div {
    label {
      font-size: 20px;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin-right: 25px;
      width: 300px;
      display: block;
      ${({ active }) => (active ? `color:#000` : `color:#ccc`)}
    }
    &.phoneno {
      input {
        :first-child {
          width: 50px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        :last-child {
          width: 350px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
    input {
      padding: 10px 0;
      width: 400px;
      border: none;
      outline: none;
      border: 1px solid #70707033;
      border-radius: 7px;
      text-indent: 10px;
      height: 50px;
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
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0;
    div {
      label {
        width: 75px;
        font-size: 0.7rem;
        margin-right: 15px;
      }
      &.phoneno {
        input {
          :first-child {
            width: 40px;
          }
          :last-child {
            width: 160px;
          }
        }
      }
      input {
        width: 200px;
        height: 35px;
      }
      button {
        padding: 5px 10px;
        font-size: 0.8rem;
      }
    }
  }
`;

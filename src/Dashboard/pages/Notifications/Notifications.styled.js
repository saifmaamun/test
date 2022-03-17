import styled from 'styled-components';
import { Card } from '../../../styles/utils.styled';

export const NotificationCard = styled(Card)`
  padding: 30px 30px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px 15px;
  }
`;

export const Notification = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  padding: 15px 0;
  border-bottom: 0.5px solid #e6e6e6;
  span {
    display: none;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primary_blue};
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 15px;
    ${({ unread }) => unread && `display:block;`}
  }
  div {
    margin-left: 50px;
    width: calc(100% - 50px);
    h3 {
      font-size: 18px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      text-transform: uppercase;
      margin: 0;
      color: #00000066;
      ${({ unread }) => unread && `color:#000000;`}
    }
    p {
      font-size: 16px;
      width: 80%;
      margin: 0;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      color: #00000066;
      ${({ unread }) => unread && `color:#000000;`}
    }
  }
  svg {
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
    right: 0;

    &:hover {
      opacity: 0.8;
    }
  }
  :last-child {
    border-bottom: none;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 10px 0;
    span {
      width: 10px;
      height: 10px;
    }
    div {
      margin-left: 45px;
      width: calc(100% - 25px);
      h3 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;

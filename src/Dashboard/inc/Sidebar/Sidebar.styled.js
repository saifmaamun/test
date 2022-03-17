import styled, { keyframes } from 'styled-components';

// keyframes for slidein down
const slideInDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
    `;

export const SidebarWrapper = styled.div`
  width: 400px;
  background: #131d40;
  box-shadow: 0px 0px 50px #2a59981a;
  border-radius: 15px;
  padding: 25px 50px;
  // position: fixed;
  // height: 97vh;
  // z-index: 999;
  img {
    width: 70%;
  }
  transition: all 0.3s ease-in-out;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 25px;
  }
`;
export const TopHolder = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const MobileMenu = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    background: red;
    width: 40px;
    padding: 2px;
    background: none;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    span {
      background: #fff;
      height: 3px;
      width: 80%;
      display: block;
      margin: 5px auto;
      border-radius: 50px;
    }
  }
`;

export const Menus = styled.div`
  margin-top: 35px;
  @media ${({ theme }) => theme.device.mobile} {
    animation: ${slideInDown} 0.5s ease-in-out;
  }
`;
export const MenuItem = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: #64ffc7;
  }
  &:last-child {
    position: absolute;
    bottom: 75px;
  }
  ${({ active }) => active && `color: #64ffc7;`}

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
    margin-bottom: 15px;
    &:last-child {
      position: relative;
      bottom: 0;
    }
  }
`;

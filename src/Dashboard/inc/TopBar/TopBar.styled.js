import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.mobile} {
    height: 70px;
    padding: 0;
  }
`;

export const PageTitle = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.dark_blue};
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1.2rem;
    }
  }
`;
export const ProfileActionSection = styled.div`
  display: flex;
  align-items: center;
  button {
    background: ${({ theme }) => theme.colors.primary_blue};
    color: #fff;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    button {
      display: none;
    }
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  div {
    position: relative;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    span {
      position: absolute;
      display: block;
      width: 15px;
      height: 15px;
      background: #00bc8b;
      border: 2px solid #fff;
      bottom: 5px;
      right: 0;
      border-radius: 50%;
    }
  }
  h1 {
    margin-left: 10px;
    margin-right: 5px;
    font-size: 1.25rem;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary_blue};
    margin-right: 10px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    div {
      img {
        width: 30px;
        height: 30px;
      }
      span {
        width: 10px;
        height: 10px;
        border: 1px solid #fff;
      }
    }
    h1 {
      font-size: 0.8rem;
    }
    svg {
      font-size: 0.8rem;
    }
  }
`;

export const ProfileMenu = styled.div`
  position: absolute !important;
  top: 60px;
  background: white;
  z-index: 999;
  padding: 10px 25px;
  box-shadow: 0px 1px 2px #00000024;
  border-radius: 15px;
  h3 {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    border-bottom: 0.2px solid #00000024;
    margin: 0;
    padding: 10px 0;
    :last-child {
      border: none;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    top: 40px;
    padding: 10px;
    h3 {
      font-size: 12px;
    }
  }
`;

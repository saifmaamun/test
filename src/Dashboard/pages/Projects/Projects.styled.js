import styled from 'styled-components';

export const MenubarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
  }
`;
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  position: relative;
  font-size: 1.2rem;
  input {
    width: 350px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 30px;
    text-indent: 50px;
    color: #878787;
    background: #fff;
    border: 0.5px solid #bcbec6;
  }
  svg {
    position: absolute;
    color: #87878794;
    left: 20px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    align-items: center;
    input {
      width: 150px;
      text-indent: 40px;
    }
  }
`;
export const FilterContainer = styled.div`
  & > div {
    display: flex;
    & > div {
      padding: 0.5rem 1.5rem;
      margin-right: 1rem;
      font-size: 1.2rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > div {
      & > div {
        padding: 2px 5px;
        border-radius: 15px;
        select {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export const ProjectsContainer = styled.div``;

export const DeletePopup = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModelContainer = styled.div`
  position: fixed;
  background: white;
  width: 45%;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  border-radius: 10px;
  padding: 100px 30px;

  svg {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 1.5rem;
    color: #bcbec6;
    cursor: pointer;
  }
  div {
    text-align: center;
    p {
      font-size: 2.0625rem;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 50%;
      margin: auto;
      button {
        border: 1px solid ${({ theme }) => theme.colors.primary_blue};
        border-radius: 5px;
        padding: 10px 15px;
        outline: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        width: 45%;
        curosr: pointer;
        :first-child {
          background: ${({ theme }) => theme.colors.primary_blue};
          color: white;
        }
        :last-child {
          background: white;
          color: #000;
          border: 1px solid #000;
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    top: 25%;
    padding: 50px 15px;
    svg {
      font-size: 1rem;
    }
    div {
      p {
        font-size: 1.5rem;
      }
      div {
        width: 70%;
      }
    }
  }
`;

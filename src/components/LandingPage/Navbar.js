import styled from 'styled-components';
import Logo from '../../images/Logo.webp';
import { ContainerCustom } from '../../styles/utils.styled';

const Navbar = ({ openPopup }) => {
  return (
    <ContainerCustom>
      <NavbarStyled>
        <img src={Logo} alt='logo' />
        <JoinButton onClick={() => openPopup()}> Join Now </JoinButton>
      </NavbarStyled>
    </ContainerCustom>
  );
};

const NavbarStyled = styled.nav`
  width: 80%;
  margin: auto;
  background-color: transparent;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 150px;
    }
  }
`;
const JoinButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary_orange};
  color: white;
  border-radius: 8px;
  border-style: none;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 7px 10px;
  min-width: 130px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    padding: 5px 7px;
    min-width: 100px;
  }
`;

export default Navbar;

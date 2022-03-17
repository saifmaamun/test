import React from 'react';
import styled from 'styled-components';
import BG1 from '../../images/BG1.webp';
import Navbar from './Navbar';
import HeaderContent from './inc/HeaderContent/HeaderContent';

function Header({ openPopup }) {
  return (
    <HeaderStyled>
      <Navbar openPopup={openPopup} />
      <HeaderContent />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background-image: url(${BG1});
  background-repeat: repeat-x;
  background-position: bottom center;
  background-size: cover;
  overflow: hidden;
  padding-bottom: 150px;
  @media ${({ theme }) => theme.device.mobile} {
    padding-bottom: 40px;
  }
`;

export default Header;

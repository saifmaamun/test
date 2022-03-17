import Header from '../LandingPage/Header';
import WaitList from '../WaitList/WaitList';
import WhySection from '../WhySection/WhySection';
import MetaVerse from '../WhySection/MetaVersePage';
import Examples from '../WhySection/Examples';
import FreeDemo from '../WhySection/FreeDemo';
import Footer from '../FooterSection/Footer';
import Testimonials from '../Testimonials/Testimonials';
import {
  DeletePopup,
  ModelContainer,
} from '../../Dashboard/pages/Projects/Projects.styled';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Signup from '../Signup/Signup';
import { EmailSignUp } from '../LandingPage/inc/HeaderContent/HeaderContent.styled';
import styled from 'styled-components';
import Facts from '../Facts/Facts';

const PopupSignup = styled(EmailSignUp)``;
const SignupPopup = styled(DeletePopup)`
  & > div {
    padding: 50px 25px 50px 25px;
    background: #2f2e66;
    border-radius: 25px;
    svg {
      top: 10px;
    }
  }
`;

const LandingPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };
  return (
    <>
      <Header openPopup={openPopup} />
      <WaitList openPopup={openPopup} />

      <WhySection openPopup={openPopup} />
      <MetaVerse openPopup={openPopup} />
      <Facts />
      <Examples />
      <FreeDemo />
      <Testimonials />
      <Footer />
      <SignupPopup show={isPopupOpen}>
        <ModelContainer>
          <FaTimes onClick={() => setPopupOpen(false)} />
          <PopupSignup>
            <Signup />
          </PopupSignup>
        </ModelContainer>
      </SignupPopup>
    </>
  );
};

export default LandingPage;

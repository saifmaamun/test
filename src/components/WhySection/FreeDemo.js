import TopRight from '../../images/TopRight.webp';
import BottomLeft from '../../images/BottomLeft.webp';

import { FreeDemoStyled, SectionTitle, EmailSignUp } from './FreeDemo.styled';
import { ContainerCustom } from '../../styles/utils.styled';
import Signup from '../Signup/Signup';

const FreeDemo = () => {
  return (
    <FreeDemoStyled>
      <img className='TopRight' src={TopRight} alt='top-right-desgin' />
      <ContainerCustom>
        <SectionTitle>
          <h1>GET CREATIVE WITH CUSTOM FREE DEMO</h1>
        </SectionTitle>
        <EmailSignUp>
          <Signup />
        </EmailSignUp>
      </ContainerCustom>
      <img className='BottomLeft' src={BottomLeft} alt='bttom-left-design' />
    </FreeDemoStyled>
  );
};

export default FreeDemo;

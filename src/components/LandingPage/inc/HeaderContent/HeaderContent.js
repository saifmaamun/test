import Timer from '../../Timer';
import ChairImage from './img/ChairImage.webp';

import {
  EmailSignUp,
  HeaderContentArea,
  HeaderContentWrapper,
  LeftContent,
  RightContent,
  JoinNowArea,
} from './HeaderContent.styled';
import { ContainerCustom } from '../../../../styles/utils.styled';
import Signup from '../../../Signup/Signup';

const HeaderContent = () => {
  return (
    <ContainerCustom>
      <HeaderContentWrapper>
        <HeaderContentArea>
          <LeftContent>
            <p>
              Immerse in the Web AR experience by giving <span>life</span> to
              your product using
              <span> NO CODE </span>
            </p>
            <EmailSignUp>
              <Signup />
            </EmailSignUp>
          </LeftContent>

          <RightContent>
            <img src={ChairImage} alt='chairimage' />
          </RightContent>
        </HeaderContentArea>

        <JoinNowArea>
          <span></span>
          <h1>JOIN NOW AND GET A CUSTOM FREE AR MOCKUP FOR YOUR PRODUCT</h1>
          <h3>Limited Time is Left for Early- Bird Offer</h3>
          <Timer />
        </JoinNowArea>
      </HeaderContentWrapper>
    </ContainerCustom>
  );
};

export default HeaderContent;

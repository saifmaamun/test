import instagram from './img/instagram.webp';
import meta from './img/meta.webp';
import linkedin from './img/linkedin.webp';
import twitter from './img/twitter.webp';
import Logo from '../../images/Logo.webp';
import {
  CopyRightWrapper,
  TitleHolder,
  LegalLinksHolder,
  SocialHolder,
  FooterWrapper,
} from './Footer.styled';
import { useHistory } from 'react-router-dom';
import { ContainerCustom } from '../../styles/utils.styled';

const Footer = () => {
  const history = useHistory();
  return (
    <FooterWrapper>
      <ContainerCustom>
        <CopyRightWrapper>
          <TitleHolder>
            <img src={Logo} alt='Logo' onClick={() => window.scrollTo(0, 0)} />
          </TitleHolder>
          <LegalLinksHolder>
            <h3 onClick={() => history.push('#')}>Privacy Policy</h3>
            <h3 onClick={() => history.push('#')}>Terms &amp; Conditions</h3>
          </LegalLinksHolder>
          <SocialHolder>
            <img
              onClick={() => history.push('#')}
              src={meta}
              alt='Social Meta'
            />
            <img
              onClick={() => history.push('#')}
              src={instagram}
              alt='Social instagram'
            />
            <img
              onClick={() => history.push('#')}
              src={twitter}
              alt='Social twitter'
            />
            <img
              onClick={() => history.push('#')}
              src={linkedin}
              alt='Social linkedin'
            />
          </SocialHolder>
        </CopyRightWrapper>
      </ContainerCustom>
    </FooterWrapper>
  );
};

export default Footer;

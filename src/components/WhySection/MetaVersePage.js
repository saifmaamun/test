import Timer from '../LandingPage/Timer';

import TopRight from '../../images/TopRight.webp';
import BottomLeft from '../../images/BottomLeft.webp';
import { MetaverseStyled, Content, TimerContainer } from './Metaverse.styled';
import { ContainerCustom } from '../../styles/utils.styled';

const MetaVerse = ({ openPopup }) => {
  return (
    <MetaverseStyled>
      <img
        className='TopRight'
        src={TopRight}
        draggable='false'
        alt='top-right-design'
      />
      <ContainerCustom>
        <Content>
          <h1>
            Give your products the <span> "METAVERSE"</span> touch
          </h1>
          <button onClick={() => openPopup()}>Join Now</button>
        </Content>

        <TimerContainer>
          <h1>JOIN NOW AND GET A CUSTOM FREE SAMPLE FOR YOUR PRODUCT</h1>
          <h3>
            48% of Shoppers are already using AR to assess new products and
            services
          </h3>
          <Timer />
        </TimerContainer>
      </ContainerCustom>

      <img
        className='BottomLeft'
        src={BottomLeft}
        draggable='false'
        alt='bttom-left-design'
      />
    </MetaverseStyled>
  );
};

export default MetaVerse;

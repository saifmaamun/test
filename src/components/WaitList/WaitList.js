import PowerOfAR from '../../images/PowerofAR.webp';
import { ContainerCustom } from '../../styles/utils.styled';
import Benefits from '../Benefits/Benefits';
import {
  WaitListContainer,
  WaitListContent,
  PowerOfARSection,
  ARContent,
  LeftContent,
  RightContent,
  FullGrayBg,
} from './WaitList.styled';

const WaitList = ({ openPopup }) => {
  return (
    <>
      <ContainerCustom>
        <WaitListContainer>
          <WaitListContent>
            <h3>
              Make your user experience AR and Metaverse
              <span>without downloading an application on their phone!</span>
            </h3>
            <p>
              Fabricatear is the most robust AR toolkit for companies who want
              to push the boundaries of creativity and storytelling. Using the
              Fabricatear ecosystem, you can rapidly build, publish, analyze and
              scale immersive AR experiences across the complete customer
              journey.
            </p>
            <button onClick={() => openPopup()}>Join the waitlist</button>
          </WaitListContent>
        </WaitListContainer>
      </ContainerCustom>
      <Benefits />
      <FullGrayBg>
        <ContainerCustom>
          <PowerOfARSection>
            <ARContent>
              <LeftContent>
                <h1>What is the power of Augmented Reality?</h1>
                <p>
                  Augmented reality mixes the real-world physical environments
                  and computer-generated virtual objects and enhances users'
                  perceptions of reality. It impacts marketing , advertisements
                  and engagements in 100 different ways.
                </p>
              </LeftContent>
              <RightContent>
                <img src={PowerOfAR} alt='power-of-ar' draggable='false' />
              </RightContent>
            </ARContent>
          </PowerOfARSection>
        </ContainerCustom>
      </FullGrayBg>
    </>
  );
};

export default WaitList;

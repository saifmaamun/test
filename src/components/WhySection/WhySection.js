import React from 'react';
// import Helmet from '../../images/Helmet.webp';
import CarMockup from './img/car.webp';
import Mobile from '../../images/Mobile.webp';
import Helmet from './img/helmet.webp';
import { ContainerCustom } from '../../styles/utils.styled';
// import { FullGrayBg } from '../WaitList/WaitList.styled';
import {
  SectionWrapper,
  ContentSection,
  ContentSectionWrapper,
  Wrapper,
} from './WhySection.styled';

const WhySection = ({ openPopup }) => {
  return (
    <>
      <Wrapper>
        {/* <FullGrayBg another> */}
        <ContainerCustom>
          <SectionWrapper>
            <ContentSectionWrapper>
              <ContentSection>
                <div>
                  <img
                    src={CarMockup}
                    loading='lazy'
                    className='carmockup'
                    alt='CarMockup'
                  />
                </div>
                <div>
                  <h1>
                    Use it for impactful <br /> AR marketing campaigns
                  </h1>
                  <p>
                    Memorable marketing campaigns that go viral and get shared
                    all over the world. Reach your target audience in immersive
                    engagement.
                  </p>
                  <button onClick={() => openPopup()}>Join Now</button>
                </div>
              </ContentSection>
            </ContentSectionWrapper>
          </SectionWrapper>
        </ContainerCustom>
        {/* </FullGrayBg> */}
        <ContainerCustom>
          <SectionWrapper>
            <ContentSectionWrapper>
              <ContentSection reverse>
                <div>
                  <h1>
                    Place interactive 3D <br /> in your real-world space
                  </h1>
                  <p>
                    Drive sales of a product by empowering customers to
                    visualise them in the correct context while surfacing
                    additional information and showcasing key features. Then
                    connect them directly to your mobile store.
                  </p>
                  <button onClick={() => openPopup()}>Join Now</button>
                </div>
                <div>
                  <img src={Mobile} alt='mobile' loading='lazy' />
                </div>
              </ContentSection>
            </ContentSectionWrapper>

            <ContentSectionWrapper>
              <ContentSection>
                <div>
                  <img src={Helmet} alt='hands on mobile' loading='lazy' />
                </div>
                <div>
                  <h1>
                    Make your print <br /> materials work harder
                  </h1>
                  <p>
                    AR has led to the renaissance of print. Connect your <br />
                    campaigns with digital and make them more engaging, more{' '}
                    <br />
                    innovative, and more accountable.
                  </p>
                  <button onClick={() => openPopup()}>Join Now</button>
                </div>
              </ContentSection>
            </ContentSectionWrapper>
          </SectionWrapper>
        </ContainerCustom>
      </Wrapper>
    </>
  );
};

export default WhySection;

import { ContainerCustom } from '../../styles/utils.styled';
import { SectionTitle } from '../Testimonials/Testimonials.styled';
import {
  Benefit,
  BenefitsContainer,
  BenefitsSectionWrapper,
} from './Benefits.styled';
import Benefit1 from './img/1.png';
import Benefit2 from './img/2.png';
import Benefit3 from './img/3.png';
import Benefit4 from './img/4.png';
import Benefit5 from './img/5.png';
import Benefit6 from './img/6.png';
import Benefit7 from './img/7.png';
import Benefit8 from './img/8.png';

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      title: 'Easy Drag & Drop Method ',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit1,
    },
    {
      id: 2,
      title: 'No coding & Experience required ',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit2,
    },
    {
      id: 3,
      title: 'Doesn’t need any application',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit3,
    },
    {
      id: 4,
      title: 'Make your customers understand the product before they buy',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit4,
    },
    {
      id: 5,
      title: 'Add it to your website easily',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit5,
    },
    {
      id: 6,
      title: 'Immediately accessible',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit6,
    },
    {
      id: 7,
      title: 'Works on all devices',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit7,
    },
    {
      id: 8,
      title: 'Marker-less object placement',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in exercitationem nihil, culpa sint saepe?',
      icon: Benefit8,
    },
  ];
  return (
    <BenefitsSectionWrapper>
      <ContainerCustom>
        <SectionTitle>
          <h1>Benefits</h1>
        </SectionTitle>
        <BenefitsContainer>
          {benefitsData.map((benefit) => (
            <Benefit key={benefit.id}>
              <img draggable='false' src={benefit.icon} alt={benefit.title} />
              <div>
                <h3>{benefit.title}</h3>
                {/* <p>{benefit.desc}</p> */}
              </div>
            </Benefit>
          ))}
        </BenefitsContainer>
      </ContainerCustom>
    </BenefitsSectionWrapper>
  );
};

export default Benefits;

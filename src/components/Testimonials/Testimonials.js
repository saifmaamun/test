import QuoteImage from './img/quote-icon.webp';
import Avatar from './img/avatar.webp';
import {
  TestimonialWrapper,
  SectionTitle,
  TestimonialContainer,
  Testimonial,
} from './Testimonials.styled';
import { ContainerCustom } from '../../styles/utils.styled';

const Testimonials = () => {
  return (
    <TestimonialWrapper>
      <ContainerCustom>
        <SectionTitle>
          <h1>Hear what our customers has to say</h1>
        </SectionTitle>
        <TestimonialContainer>
          <Testimonial>
            <img draggable='false' src={QuoteImage} alt='Quote' />
            <p>
              FabricateAR blew my mind , I'm standing right next to my favourite
              car. Want more cars on this so I can have full automobile
              experience
            </p>

            <div>
              <img draggable='false' src={Avatar} alt='Avatar ' />
              <div>
                <h3>Henrie Z</h3>
                {/* <h4>Pepsi</h4> */}
              </div>
            </div>
          </Testimonial>
          <Testimonial>
            <img draggable='false' src={QuoteImage} alt='Quote' />
            <p>
              I design clothes and my customers tried them on instantly before
              they buy, it literally made their buying time to half.
            </p>

            <div>
              <img draggable='false' src={Avatar} alt='Avatar ' />
              <div>
                <h3>Arie L.</h3>
                {/* <h4>Pepsi</h4> */}
              </div>
            </div>
          </Testimonial>
          <Testimonial>
            <img draggable='false' src={QuoteImage} alt='Quote' />
            <p>
              Definitely worth the investment. It really saves me time and
              effort. fabricatear is exactly what our business has been lacking.
            </p>

            <div>
              <img draggable='false' src={Avatar} alt='Avatar ' />
              <div>
                <h3>Dierdre J.</h3>
                {/* <h4>Pepsi</h4> */}
              </div>
            </div>
          </Testimonial>
        </TestimonialContainer>
      </ContainerCustom>
    </TestimonialWrapper>
  );
};

export default Testimonials;

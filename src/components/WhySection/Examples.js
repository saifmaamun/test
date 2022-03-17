import Image1 from './img/batman.png';
import Image2 from './img/shoe.png';
import Image3 from './img/furniture.png';
import Image4 from './img/car.png';

import {
  ExampleSectionWrapper,
  ExampleContainer,
  ProductCard,
  SectionTitle,
} from './Examples.styled';
import { ContainerCustom } from '../../styles/utils.styled';

const Examples = () => {
  return (
    <ContainerCustom>
      <ExampleSectionWrapper>
        <SectionTitle>
          <h1>Check out some of our examples</h1>
        </SectionTitle>
        <ExampleContainer>
          <ProductCard>
            <img src={Image1} alt='Batman' />
            <h3>Bring Your Mascot Alive</h3>
            <h5>Customized</h5>
            <div>
              <p>
                Place any mascot you want for marketing and take a picture with
                them!
              </p>
              <button>View More</button>
            </div>
          </ProductCard>
          <ProductCard>
            <img src={Image2} alt='Shoe' />
            <h3>Give Your products A 3D Mockup</h3>
            <h5>Customized</h5>
            <div>
              <p>
                Place any product you want on your table and check them out
                before buying!
              </p>
              <button>View More</button>
            </div>
          </ProductCard>
          <ProductCard>
            <img src={Image3} alt='Furniture' />
            <h3>View In AR Before You Buy</h3>
            <h5>Customized</h5>
            <div>
              <p>
                Want to know how this will look for your new home? Place it now
                &amp; try it!
              </p>
              <button>View More</button>
            </div>
          </ProductCard>
          <ProductCard>
            <img src={Image4} alt='Car' />
            <h3>Place Your Ride Near You</h3>
            <h5>Customized</h5>
            <div>
              <p>
                Want to take pictures with your dream car? Want to see without
                going to showroom? Try now!
              </p>
              <button>View More</button>
            </div>
          </ProductCard>
        </ExampleContainer>
      </ExampleSectionWrapper>
    </ContainerCustom>
  );
};

export default Examples;

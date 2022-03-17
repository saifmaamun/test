import { ContainerCustom } from '../../styles/utils.styled';
import { SectionTitle } from '../WhySection/Examples.styled';
import { Fact, FactsContainer } from './Facts.styled';

import { FiCheckSquare } from 'react-icons/fi';

const Facts = () => {
  const facts = [
    {
      id: '1',
      fact: 'AR is 3 times more memorable compared to traditional non-AR media',
    },
    {
      id: '2',
      fact: '64% of marketers are already using or expecting to use AR and VR in the near future',
    },
    {
      id: '3',
      fact: 'Two-thirds of shoppers think that AR would help them make a better buying decision ',
    },
    {
      id: '4',
      fact: 'AR engagement is up nearly 20% since the beginning of 2020 with conversion rates increasing by 90%',
    },
    {
      id: '5',
      fact: 'AR experiences are 200% more engaging as they deliver double the levels of engagement compared to their non-AR equivalent',
    },
    {
      id: '6',
      fact: 'AR received 45% higher engagement than TV',
    },
    {
      id: '7',
      fact: 'End users spend 2-8 full minutes on average across all AR campaign experiences',
    },
  ];
  return (
    <>
      <ContainerCustom>
        <SectionTitle>
          <h1>Facts</h1>
        </SectionTitle>
        <FactsContainer>
          {facts.map((fact) => (
            <Fact key={fact.id}>
              <FiCheckSquare />
              <p>{fact.fact}</p>
            </Fact>
          ))}
        </FactsContainer>
      </ContainerCustom>
    </>
  );
};

export default Facts;

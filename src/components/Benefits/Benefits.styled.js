import styled from 'styled-components';

export const BenefitsSectionWrapper = styled.div`
  padding: 50px 0;
`;

export const BenefitsContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const Benefit = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  margin: 20px 0;
  img {
    width: 80px;
    height: 80px;
  }
  div {
    margin-left: 15px;
    width: 80%;

    h3 {
      font-size: 1rem;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin: 0;
      color: #000;
    }
    p {
      margin: 0;
      color: #000;
      opacity: 0.5;
    }
  }
`;

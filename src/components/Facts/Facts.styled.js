import styled from 'styled-components';

export const FactsContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
`;
export const Fact = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  svg {
    font-size: 1.5rem;
    margin-right: 15px;
    color: ${({ theme }) => theme.colors.primary_blue};
  }
  p {
    font-size: 1.2rem;
  }
`;

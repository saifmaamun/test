import styled from 'styled-components';
import { Card } from '../../../../styles/utils.styled';

export const LinkCard = styled(Card)`
  margin-bottom: 25px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2.5rem;
    h3 {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 1.2rem;
      margin: 0;
    }
    button {
      background: ${({ theme }) => theme.colors.primary_blue};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    div {
      padding: 15px 5px;
      h3 {
        font-size: 0.8rem;
      }
      button {
        padding: 5px 10px;
        font-size: 0.8rem;
      }
    }
  }
`;

const Links = () => {
  return (
    <div>
      <LinkCard>
        <div>
          <h3>Create a new model</h3>
          <button>Fabricate Now</button>
        </div>
      </LinkCard>
      <LinkCard>
        <div>
          <h3>Upload your model link</h3>
          <button>Upload Model</button>
        </div>
      </LinkCard>
      <LinkCard>
        <div>
          <h3>Access your website</h3>
          <button>My Websites</button>
        </div>
      </LinkCard>
    </div>
  );
};

export default Links;

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0;
`;
export const SectionWrapper = styled.div``;

export const ContentSectionWrapper = styled.div`
  ${({ greyBg }) => greyBg && `background: #e3e3e3; `}
  @media ${({ theme }) => theme.device.mobile} {
    padding: 25px 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 25px 0;
  }
`;
export const ContentSection = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;

  & > div {
    width: 50%;
    padding: 15px;
    position: relative;
  }
  img {
    margin: auto;
    width: 100%;
  }
  h1 {
    font-size: 2.1875rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    width: 80%;
  }
  p {
    font-size: 1.4375rem;
    color: #9db1bc;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    width: 80%;
  }
  button {
    width: fit-content;
    background-color: #ff6e00;
    color: white;
    border-radius: 8px;
    border-style: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 7px 25px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    margin: auto;
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};

    & > div {
      width: 100%;
    }
    img {
      width: 100%;
      margin: auto;
    }
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
    button {
      font-size: 0.9rem;
      padding: 7px 15px;
      border-radius: 5px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
    margin: auto;

    & > div {
      width: 50%;
    }
    img {
      width: 90%;
      margin: auto;
    }
    h1 {
      font-size: 2rem;
      width: 100%;
    }
    p {
      font-size: 1.25rem;
      width: 100%;
    }
    button {
      font-size: 1.25rem;
    }
  }
`;

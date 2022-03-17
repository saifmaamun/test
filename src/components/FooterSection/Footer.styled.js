import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background: #1d2353;

  width: 100%;
`;
export const CopyRightWrapper = styled.div`
  background: #1d2353;
  padding: 10px 70px;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 25px 25px;
    text-align: center;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 25px 15px;
  }
`;

export const TitleHolder = styled.div`
  width: 50%;
  cursor: pointer;
  h1 {
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    img {
      width: 60%;
    }
  }
`;
export const LegalLinksHolder = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  h3 {
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    h3 {
      font-size: 1rem;
      margin: 15px auto;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    h3 {
      font-size: 1rem;
      margin: 15px auto;
    }
  }
`;
export const SocialHolder = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  img {
    height: 40px;
    margin-right: 15px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    justify-content: center;
    margin-top: 25px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 25px;
    img {
      height: 30px;
      margin-right: 5px;
    }
  }
`;

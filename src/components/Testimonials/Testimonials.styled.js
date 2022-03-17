import styled from 'styled-components';
import background from './img/background.webp';
import { SectionTitle as SectionTitleOld } from '../WhySection/Examples.styled';

export const TestimonialWrapper = styled.div`
  background-color: #fafafa;
  padding: 75px 0;
  background: url(${background});
  background-size: cover;
  background-position: 0 -200px;
  @media ${({ theme }) => theme.device.mobile} {
    background-position: bottom center;
    padding: 50px 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-position: 0 0;
    padding: 50px 0;
  }
`;

export const SectionTitle = styled(SectionTitleOld)`
  margin-top: 0;
`;

export const TestimonialContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 45px auto;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: flex-start;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
  }
`;
export const Testimonial = styled.div`
  background: white;
  width: 350px;
  padding: 50px 20px;
  border-radius: 5px;
  margin-right: 15px;
  img {
    width: 35px;
  }
  p {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: #9db1bc;
  }
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    div {
      margin-left: 15px;
      h3 {
        margin: 0;
        font-size: 0.9rem;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        color: ${({ theme }) => theme.colors.primary_blue};
      }
      h4 {
        margin: 0;
        font-size: 0.8rem;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        color: #000;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 30px 25px;
    margin: 15px auto;
    p {
      font-size: 0.7rem;
    }
    & > div {
      div {
        h3 {
          font-size: 0.8rem;
        }
        h4 {
          font-size: 0.7rem;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 30px 15px;
    margin: auto 7px;
    p {
      font-size: 0.8rem;
    }
    & > div {
      width: 100%;
      img {
        width: 40px;
        height: 40px;
      }
      div {
        h3 {
          font-size: 0.8rem;
        }
        h4 {
          font-size: 0.7rem;
        }
      }
    }
  }
`;

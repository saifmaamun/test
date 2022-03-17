import styled from 'styled-components';

export const ModelWrapper = styled.div`
  background: white;
  padding: 10px;
  border-radius: 10px;
  img {
    width: 100%;
    border-radius: 16px;
  }
  h1 {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 0;
  }
  p {
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-top: 0;
  }
  div {
    display: flex;
    justify-content: space-between;
    button {
      border: 1px solid ${({ theme }) => theme.colors.primary_blue};
      border-radius: 5px;
      padding: 6px 7px;
      outline: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      width: 49%;
      :first-child {
        background: ${({ theme }) => theme.colors.primary_blue};
        color: white;
      }
      :last-child {
        background: white;
        color: #000;
        border: 1px solid #000;
      }
    }
  }
`;

import styled from 'styled-components';

export const ProjectCardWrapper = styled.div`
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
  }
  p {
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  div {
    display: flex;
    justify-content: space-between;
    button {
      border: 1px solid ${({ theme }) => theme.colors.primary_blue};
      border-radius: 5px;
      padding: 7px 10px;
      outline: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      width: 45%;
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

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;
export const StatusSpan = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: 2px 10px;
  border-radius: 15px;
  ${({ status }) =>
    status === 'Published' && `background:#4DD332; color:#fff;`};
  ${({ status }) => status === 'Draft' && `background:#FACB10; color:#000;`};
  ${({ status }) => status === 'Disabled' && `background:#D33232; color:#fff;`};
`;

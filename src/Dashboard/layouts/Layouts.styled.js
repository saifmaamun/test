import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;

  background: #f9fafe;
  height: 100%;
  padding: 15px;
  border-radius: 15px;
  main {
    display: flex;
    flex-direction: column;
    // margin-left: 400px;
    height: 90vh;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    main {
      margin-left: 0;
      height: auto;
    }
  }
`;

export const MainWrapper = styled.div`
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
  margin-top: -25px;
`;

// import { ContainerCustom } from '../../styles/utils.styled';
import Sidebar from '../inc/Sidebar/Sidebar';
import TopBar from '../inc/TopBar/TopBar';
import { LayoutWrapper, MainWrapper } from './Layouts.styled';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Sidebar />
        <MainWrapper>
          <TopBar />
          <main>{children}</main>
        </MainWrapper>
      </LayoutWrapper>
    </>
  );
};

export default Layout;

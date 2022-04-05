import logo from '../../../images/Logo.webp';
import {
  MenuItem,
  Menus,
  MobileMenu,
  SidebarWrapper,
  TopHolder,
} from './Sidebar.styled';
import { TiHome, TiFlash, TiCog } from 'react-icons/ti';
import { RiBarChart2Fill, RiLayoutMasonryFill } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const Sidebar = () => {
  const { logOut}= useAuth()
  const history = useHistory();
  const location = useLocation();
  // get a screen size and set false on mobile screen

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);
  return (
    <SidebarWrapper>
      <TopHolder>
        <img src={logo} alt='Logo Fabricatear' />
        <MobileMenu onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </MobileMenu>
      </TopHolder>
      {isOpen && (
        <Menus>
          {location.pathname === '/dashboard' ? (
            <MenuItem onClick={() => history.push('/dashboard')} active>
              <TiHome />
              Dashboard
            </MenuItem>
          ) : (
            <MenuItem onClick={() => history.push('/dashboard')}>
              <TiHome />
              Dashboard
            </MenuItem>
          )}
          {location.pathname === '/projects' ? (
            <MenuItem onClick={() => history.push('/projects')} active>
              <TiFlash /> My Projects
            </MenuItem>
          ) : (
            <MenuItem onClick={() => history.push('/projects')}>
              <TiFlash /> My Projects
            </MenuItem>
          )}
          {location.pathname === '/models' ? (
            <MenuItem onClick={() => history.push('/models')} active>
              <RiBarChart2Fill />
              Models
            </MenuItem>
          ) : (
            <MenuItem onClick={() => history.push('/models')}>
              <RiBarChart2Fill />
              Models
            </MenuItem>
          )}
          {location.pathname === '/addmodel' ? (
            <MenuItem onClick={() => history.push('/addmodel')} active>
              <RiBarChart2Fill />
              Add Model
            </MenuItem>
          ) : (
              <MenuItem onClick={() => history.push('/addmodel')}>
              <RiBarChart2Fill />
                Add Model
            </MenuItem>
          )}
          {location.pathname === '/templates' ? (
            <MenuItem onClick={() => history.push('/templates')} active>
              <RiLayoutMasonryFill />
              Templates
            </MenuItem>
          ) : (
            <MenuItem onClick={() => history.push('/templates')}>
              <RiLayoutMasonryFill />
              Templates
            </MenuItem>
          )}
          {location.pathname === '/settings' ? (
            <MenuItem onClick={() => history.push('/settings')} active>
              <TiCog />
              Settings
            </MenuItem>
          ) : (
            <MenuItem onClick={() => history.push('/settings')}>
              <TiCog />
              Settings
            </MenuItem>
          )}

          <MenuItem onClick={logOut}>
            <IoIosLogOut />
            Logout
          </MenuItem>
        </Menus>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;

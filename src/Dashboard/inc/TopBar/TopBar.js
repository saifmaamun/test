import {
  PageTitle,
  ProfileActionSection,
  ProfileMenu,
  TopBarWrapper,
  UserInfo,
} from './TopBar.styled';

import { FaCaretDown, FaBell } from 'react-icons/fa';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const TopBar = () => {
  const { user } = useAuth()
  const userImage=user.photoURL

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const navTo = (path) => {
    setIsProfileOpen(false);
    history.push(path);
  };

  let pageTitle = 'Dashboard';
  switch (location.pathname) {
    case '/dashboard':
      pageTitle = 'Dashboard';
      break;
    case '/projects':
      pageTitle = 'My Projects';
      break;
    case '/models':
      pageTitle = 'Models';
      break;
    case '/templates':
      pageTitle = 'Templates';
      break;
    case '/settings':
      pageTitle = 'Settings';
      break;

    case '/profile':
      pageTitle = 'Edit Profile';
      break;
    case '/notifications':
      pageTitle = 'Notifications';
      break;
    case '/change-password':
      pageTitle = 'Change Password';
      break;
    case '/payment-history':
      pageTitle = 'Payment History';
      break;

    default:
      pageTitle = 'Dashboard';
      break;
  }

  const createProject = () => {
    history.push("/createprojects");
  }


  return (
    <TopBarWrapper>
      <PageTitle>
        <h1>{pageTitle}</h1>
      </PageTitle>
      <ProfileActionSection>
        <button onClick={() => createProject()}>Fabricate Now</button>
        <UserInfo>
          <>
            <div onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <img src='https://via.placeholder.com/50' alt='user' />
              <span></span>
            </div>
            <h1 onClick={() => setIsProfileOpen(!isProfileOpen)}>
              {user?.displayName}
            </h1>
            <FaCaretDown onClick={() => setIsProfileOpen(!isProfileOpen)} />
          </>
          <FaBell onClick={() => history.push('/notifications')} />
          {isProfileOpen && (
            <ProfileMenu>
              <h3 onClick={() => navTo('/profile')}>Edit Profile</h3>
              <h3 onClick={() => navTo('/terms-conditions')}>
                Terms &amp; Conditions
              </h3>
              <h3 onClick={() => navTo('/privacy-policy')}>Privacy Policy</h3>
            </ProfileMenu>
          )}
        </UserInfo>
      </ProfileActionSection>
    </TopBarWrapper>
  );
};

export default TopBar;

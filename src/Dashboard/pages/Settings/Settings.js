import { Card, SettingsWrapper, ToggleSwitch } from './Settings.styled';
import { useHistory } from 'react-router-dom';

const Settings = () => {
  const notificationlabel = 'Settings';
  const history = useHistory();
  return (
    <SettingsWrapper>
      <Card>
        <div>
          <h1>Notification</h1>
          <ToggleSwitch>
            <input
              type='checkbox'
              className='checkbox'
              name={notificationlabel}
              id={notificationlabel}
            />
            <label className='label' htmlFor={notificationlabel}>
              <span className='inner' />
              <i className='switch' />
            </label>
          </ToggleSwitch>
        </div>
        <div onClick={() => history.push('/payment-history')}>
          <h1>Payment History</h1>
        </div>
        <div onClick={() => history.push('/change-password')}>
          <h1>Change Password</h1>
        </div>
      </Card>
    </SettingsWrapper>
  );
};

export default Settings;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from './Dashboard/pages/PrivateRoute/PrivateRoute';

const domain = "dev-saifmaamun.us.auth0.com";
const clientId = "H9K5TAKgeW8syfxnt5c0CYMKJUW8GLEx";
console.log(domain, clientId)

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri= {window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

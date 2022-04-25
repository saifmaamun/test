import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from './Dashboard/pages/PrivateRoute/PrivateRoute';

const domain = "dev-saifmaamun.us.auth0.com";
const clientId = "H9K5TAKgeW8syfxnt5c0CYMKJUW8GLEx";
console.log(domain, clientId)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri= {window.location.origin}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

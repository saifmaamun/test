import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageNotFound from '../components/PageNotFound/PageNotFound';
import LandingPage from '../components/pages/LandingPage';
import Layout from '../Dashboard/layouts/Layout';
import Dashboard from '../Dashboard/pages/Dashboard/Dashboard';
import Projects from '../Dashboard/pages/Projects/Projects';
import Models from '../Dashboard/pages/Models/Models';
import Templates from '../Dashboard/pages/Templates/Templates';
import Settings from '../Dashboard/pages/Settings/Settings';
import Profile from '../Dashboard/pages/Profile/Profile';
import Notifications from '../Dashboard/pages/Notifications/Notifications';
import ChangePassword from '../Dashboard/pages/Profile/ChangePassword';
import PaymentHistory from '../Dashboard/pages/PaymentHistory/PaymentHistory';
import Login from '../Dashboard/pages/Auth/Login';
import AuthProvider from '../context/AuthProvider';

const MainBuilder = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
          <Layout>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/models' component={Models} />
            <Route exact path='/templates' component={Templates} />
            <Route exact path='/settings' component={Settings} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/change-password' component={ChangePassword} />
            <Route exact path='/notifications' component={Notifications} />
            <Route exact path='/payment-history' component={PaymentHistory} />
          </Layout>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default MainBuilder;

import React from 'react';
import {Switch} from 'react-router-dom';

import LogIn from '../pages/LogIn';
import Crud from '../pages/Crud';
import NewPerson from '../pages/NewPerson';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />

    <Route path="/dashboard" component={Crud} isPrivate />
    <Route path="/Person/:id?" component={NewPerson} isPrivate />
  </Switch>
);

export default Routes;

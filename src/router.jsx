import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import Home from './modules/home/Home';


const Routes = (
  <BrowserRouter basename="/">
    <Switch>
        <Route path='/' component={Home}/>

        <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;

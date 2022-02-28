import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
} from 'react-router-dom';
import List from './screens/List';
import Details from './screens/Details';
import { routes } from './constants';

const Routes: React.FC = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route path={routes.home} element={<List />} />
      <Route path={routes.details} element={<Details />} />
    </BrowserRoutes>
  </BrowserRouter>
);

export default Routes;

import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
} from 'react-router-dom';
import List from './screens/List';
import Details from './screens/Details';

const Routes: React.FC = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route path="/" element={<List />} />
      <Route path="/details" element={<Details />} />
    </BrowserRoutes>
  </BrowserRouter>
);

export default Routes;

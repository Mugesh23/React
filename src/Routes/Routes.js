import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../AppScreen/Home';
import Login from '../AuthScreen/Login';
import { HOME_PATH, LOGIN_PATH } from '../RoutesPath';

export default function Routes() {
  return (
    <Routes>
        <Route path={HOME_PATH} element={Home}  />
        <Route path={LOGIN_PATH} element={Login}  />
    </Routes>
  );
}

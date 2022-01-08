import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const AuthNav = () => (
  <>
    <NavLink className={s.link} to="/register" exact>
      Registation
    </NavLink>
    <NavLink className={s.link} to="/login" exact>
      Login
    </NavLink>
  </>
);

export default AuthNav;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink className={s.link} to="/">
      <IoHome size="22" />
    </NavLink>
  </nav>
);

export default Navigation;

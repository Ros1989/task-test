import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import s from './Navigation.module.css';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav className={s.nav}>
    <NavLink className={s.link} to="/">
      <IoHome size="22" />
    </NavLink>

    {isAuthenticated && (
      <NavLink className={s.link} to="/private">
        Private page
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

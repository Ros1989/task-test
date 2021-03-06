import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './AuthNaw';
import UserMenu from '../UserMenu/UserMenu';
import s from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => (
  <header className={s.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

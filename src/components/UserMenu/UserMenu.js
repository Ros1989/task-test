import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from './default-avatar.png';
import s from '../Navigation/Navigation.module.css';
import { ImExit } from 'react-icons/im';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.userWrapper}>
    <img src={avatar} alt="" width="32" className={s.avatar} />
    {/* <h1 className={s.name}>Hello, {name}</h1> */}
    <span className={s.name}>Hello, {name}</span>

    <ImExit size="20" className={s.button} type="button" onClick={onLogout} />
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

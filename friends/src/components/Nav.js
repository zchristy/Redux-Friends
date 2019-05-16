import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to='/'>FriendsList</NavLink>
      <NavLink to='/add-friend'>Add Friend</NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </nav>
  );
}

export default Nav;

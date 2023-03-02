import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {isLoggedIn && (
      <nav className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/submit">Suggest a Story</Link>
        <Link onClick={handleClick} to="#">
          Log Out
        </Link>
      </nav>
    )}
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

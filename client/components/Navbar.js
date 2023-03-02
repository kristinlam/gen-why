import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <div>
      {isLoggedIn ? (
        <div>
          <Link to="/submit">Suggest a Story</Link>
          <Link to="/admin">Admin Control</Link>
          <Link onClick={handleClick} to="#">
            Log Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/submit">Suggest a Story</Link>
        </div>
      )}
    </div>
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

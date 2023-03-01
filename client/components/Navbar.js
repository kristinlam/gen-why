import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../store';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <Link
        to="/"
        component={RouterLink}
        variant="h5"
        underline="none"
        sx={{ flexGrow: 1 }}
      >
        <img className="logo" src="/logo.png" />
      </Link>

      {isLoggedIn ? (
        <div>
          <Link
            to="/submit"
            component={RouterLink}
            variant="body1"
            underline="none"
            color="#333"
          >
            Suggest a Story
          </Link>
          <Link
            to="/admin"
            component={RouterLink}
            variant="body1"
            underline="none"
            color="#333"
          >
            Admin Control
          </Link>
          <Link
            onClick={handleClick}
            to="#"
            component={RouterLink}
            variant="body1"
            underline="none"
            color="#333"
          >
            Log Out
          </Link>
        </div>
      ) : (
        <div>
          <Link
            to="/submit"
            component={RouterLink}
            variant="body1"
            underline="none"
            color="#333"
          >
            Suggest a Story
          </Link>
        </div>
      )}
    </Toolbar>
  </AppBar>
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

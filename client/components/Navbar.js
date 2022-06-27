import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../store';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
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
      <Link
        to="/submit"
        component={RouterLink}
        variant="body1"
        underline="none"
        color="#333"
      >
        Suggest a Story
      </Link>
    </Toolbar>
  </AppBar>

  // <div>
  //   <Link to="/">
  //     <h1>Gen Why</h1>
  //   </Link>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Link to="/home">Admin Control</Link>
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       </div>
  //     ) : (
  //       <div>
  //         {/* The navbar will show these links before you log in */}
  //         {/* <Link to="/login">Login</Link>
  //         <Link to="/signup">Sign Up</Link> */}
  //       </div>
  //     )}
  //   </nav>
  // </div>
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

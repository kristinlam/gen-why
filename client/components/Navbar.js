import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn && (
        <nav className="flex justify-between bg-green p-5 text-cream">
          <div>
            <Link className="mr-6" to="/">
              Home
            </Link>
            <Link to="/submit">Suggest a Story</Link>
          </div>
          <div>
            <Link onClick={handleClick} to="/login">
              Log Out
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

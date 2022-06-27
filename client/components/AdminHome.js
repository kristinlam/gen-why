import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const AdminHome = (props) => {
  const { username } = props;

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <p>This is admin control. Here you can approve user submissions.</p>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(AdminHome);

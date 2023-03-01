import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubjects, deleteSubject } from '../store/subjects';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

export const AdminHome = ({ username }) => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjects('pending'));
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteSubject(id));
  };

  const pendingSubjects = subjects.map((subject) => {
    return (
      <div key={subject.id}>
        <div>
          <p>{subject.name}</p>
          <p>{subject.link}</p>
        </div>
        <div>
          <Button>Approve</Button>
          <Button onClick={() => handleDelete(subject.id)}>Reject</Button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <p>This is admin control. Here you can approve user submissions.</p>
      {pendingSubjects}
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(AdminHome);

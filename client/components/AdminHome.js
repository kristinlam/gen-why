import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubjects, deleteSubject } from '../store/subjects';
import { updateSubject } from '../store/singleSubject';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

export const AdminHome = ({ username }) => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjects('pending'));
  }, []);

  const handleApprove = async (subject) => {
    await dispatch(updateSubject({ ...subject, status: 'approved' }));
    dispatch(getSubjects('pending'));
  };

  const handleReject = (id) => {
    dispatch(deleteSubject(id));
  };

  const pendingSubjects = subjects.map((subject) => {
    return (
      <div key={subject.id}>
        <p>{subject.name}</p>
        <p>{subject.link}</p>
        <Button onClick={() => handleApprove(subject)}>Approve</Button>
        <Button onClick={() => handleReject(subject.id)}>Reject</Button>
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

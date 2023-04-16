import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubjects, deleteSubject } from '../store/subjects';
import { updateSubject } from '../store/singleSubject';
import Navbar from './Navbar';

const AdminHome = () => {
  const subjects = useSelector((state) => state.subjects);
  const username = useSelector((state) => state.auth.username);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjects('pending'));
  }, []);

  const handleApprove = (subject) => {
    dispatch(updateSubject({ ...subject, status: 'approved' }));
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
        <button onClick={() => handleApprove(subject)}>Approve</button>
        <button onClick={() => handleReject(subject.id)}>Reject</button>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <h3>Welcome, {username}</h3>
      {pendingSubjects}
    </div>
  );
};

export default AdminHome;

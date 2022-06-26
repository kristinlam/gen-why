import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubjects } from '../store/subjects';

export const AllSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  return (
    <div>
      {subjects.map((subject) => (
        <Link key={subject.id} to={`/subjects/${subject.id}`}>
          {subject.name}
        </Link>
      ))}
    </div>
  );
};

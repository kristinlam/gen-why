import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { getSubjects } from '../store/subjects';

const AllSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  // sorting function
  function alphabeticalSort(a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  }

  return (
    <div>
      {subjects.sort(alphabeticalSort).map((subject) => (
        <div key={subject.id}>
          <Link
            to={`/subjects/${subject.id}`}
            component={RouterLink}
            variant="body1"
            underline="none"
          >
            {subject.name}
          </Link>
          •
        </div>
      ))}
    </div>
  );
};

export default AllSubjects;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
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
        <Button
          m={1}
          key={subject.id}
          variant="contained"
          to={`/subjects/${subject.id}`}
          component={RouterLink}
          size="large"
        >
          {subject.name}
        </Button>
      ))}
    </div>
  );
};

export default AllSubjects;

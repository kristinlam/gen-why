import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { getSubjects } from '../store/subjects';

const AllSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects('approved'));
  }, [dispatch]);

  // sorting function
  function alphabeticalSort(a, b) {
    a.name = a.name.toLowerCase();
    b.name = b.name.toLowerCase();
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  }

  return (
    <div>
      {subjects.sort(alphabeticalSort).map((subject) => (
        <Button
          sx={{ margin: 1 }}
          key={subject.id}
          variant="contained"
          size="large"
        >
          <Link href={subject.link} target="_blank" color="secondary">
            {subject.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default AllSubjects;

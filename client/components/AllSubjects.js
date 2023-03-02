import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubjects } from '../store/subjects';

const AllSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects('approved'));
  }, [dispatch]);

  // sorting alphabetically
  const alphabeticalSort = (a, b) => {
    a.name = a.name.toLowerCase();
    b.name = b.name.toLowerCase();
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  };

  // give each subject a color
  const selectColor = (index) => {
    const colors = ['blue', 'purple', 'red', 'yellow', 'green'];
    return colors[index % colors.length];
  };

  return (
    <div className="subject-list">
      {subjects.sort(alphabeticalSort).map((subject, index) => (
        <div key={subject.id} className="text-6xl block">
          <a
            href={subject.link}
            className={`text-${selectColor(index)}`}
            target="_blank"
          >
            {subject.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default AllSubjects;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubjects } from '../store/subjects';
import { motion } from 'framer-motion';

const AllSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects('approved'));
  }, []);

  // sorting alphabetically
  const alphabeticalSort = (a, b) => {
    a.name = a.name.toLowerCase();
    b.name = b.name.toLowerCase();
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  };

  const selectColor = (index) => {
    const colors = ['blue', 'purple', 'red', 'yellow', 'green'];
    return colors[index % colors.length];
  };

  return (
    <div className="subject-list">
      <ul>
        {subjects.sort(alphabeticalSort).map((subject, index) => (
          <motion.li
            key={subject.id}
            className={`text-7xl mb-6 ${selectColor(index)}`}
            initial={{ opacity: 0, translateY: 150 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={subject.link}
              className={`text-${selectColor(index)}`}
              target="_blank"
            >
              {subject.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AllSubjects;

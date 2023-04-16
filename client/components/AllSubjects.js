import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubjects } from '../store/subjects';
import { motion } from 'framer-motion';
import { sortAlphabetical, cycleColors } from '../helpers';

const AllSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjects('approved'));
  }, []);

  // Changes to shallow copy of nested objects (such as objects within arrays) will cause changes to original objects.
  // Make deep copy of state before sorting.
  const deepCopyOfSubjects = JSON.parse(JSON.stringify(subjects));

  return (
    <div className="subject-list">
      <ul>
        {deepCopyOfSubjects.sort(sortAlphabetical).map((subject, index) => (
          <motion.li
            key={subject.id}
            className={`text-7xl mb-6 ${cycleColors(index)}`}
            initial={{ opacity: 0, translateY: 150 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={subject.link}
              className={`text-${cycleColors(index)}`}
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

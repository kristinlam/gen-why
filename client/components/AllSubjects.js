import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubjects } from '../store/subjects';
import { motion, AnimatePresence } from 'framer-motion';
import { sortAlphabetical, cycleColors } from '../helpers';

const AllSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjects('approved')).then(() => {
      setIsLoaded(true);
    });
  }, []);

  // Changes to shallow copy of nested objects (such as objects within arrays) will cause changes to original objects.
  // Make deep copy of state before sorting.
  const deepCopyOfSubjects = JSON.parse(JSON.stringify(subjects));

  return (
    <div className="subject-list">
      {!isLoaded ? (
        <AnimatePresence>
          <motion.p
            className="text-5xl text-green"
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, translateY: 150 }}
          >
            Loading...
          </motion.p>
        </AnimatePresence>
      ) : (
        <ul className="text-5xl md:text-6xl xl:text-7xl">
          {deepCopyOfSubjects.sort(sortAlphabetical).map((subject, index) => (
            <motion.li
              key={subject.id}
              className={`mb-4 md:mb-5 xl:mb-6 ${cycleColors(index)}`}
              initial={{ opacity: 0, translateY: 150 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={subject.link}
                className={`textShadow-${cycleColors(index)} text-${cycleColors(
                  index
                )}`}
                target="_blank"
              >
                {subject.name}
              </a>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllSubjects;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AllSubjects from './AllSubjects';

export const Home = () => {
  return (
    <div className="p-10 ">
      <AllSubjects />
      <motion.div
        className="fixed bottom-0 right-0 w-1/3 m-10 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-2.5 text-red ">Gen Why</h1>
        <p>
          Millenials have gotten a lot of flak from the media for ruining
          everything from yogurt to democracy. After much backlash, these
          articles pittered out — the story of how we killed the "How
          Millennials Killed" headlines. As this era of journalism draws to a
          close, let's take a look back on everything we've been blamed for.
          Don't see something?{' '}
          <Link to="/suggestions" className="text-red font-bold">
            Suggest a story.
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Home;

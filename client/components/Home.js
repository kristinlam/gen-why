import React from 'react';
import AllSubjects from './AllSubjects';

export const Home = () => {
  return (
    <div>
      <AllSubjects />
      <div>
        <h1 className="text-3xl font-bold underline">Gen Why</h1>
        <p>
          Millenials (Gen Y) have been blamed for ruining a lot of things. The
          media was quick to point fingers at us for the cold-blooded murders of
          entire industries and timeless traditions, like wearing pants. After
          much online backlash, these articles are nearing their end — which is
          how we've managed to kill the "How Millennials Killed" headlines. As
          this era of brilliant journalism draws its final breath, let's look
          back on all the things millennials have been blamed for.
        </p>
      </div>
    </div>
  );
};

export default Home;

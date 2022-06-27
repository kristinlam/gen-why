import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AllSubjects from './AllSubjects';

export const Home = () => {
  return (
    <Container>
      <Typography variant="h6">
        Millenials (Gen Y) have been blamed for ruining a lot of things. Golf.
        Cruise ships. Diamonds. The media was quick to point fingers at us for
        the cold-blooded murders of entire industries and timeless traditions,
        like wearing pants. After much online backlash, these articles near
        their end — which is how we've manage to kill the "How Millennials
        Killed" headlines. As this era of brilliant journalism draws its final
        breath, let's look back on all the things millennials have been blamed
        for.
        <Link component={RouterLink} to="/submit">
          Are we missing anything?
        </Link>
      </Typography>
      <AllSubjects />
    </Container>
  );
};

export default Home;

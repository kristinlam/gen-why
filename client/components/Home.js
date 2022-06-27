import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AllSubjects from './AllSubjects';

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        mt={10}
        sx={{
          background: 'rgba(255,255,255, 0.95)',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h2" color="#a3a380" align="center">
          Gen Why
        </Typography>
        <Typography variant="body1" mt={4}>
          Millenials (Gen Y) have been blamed for ruining a lot of things. Golf.
          Cruise ships. Diamonds. The media was quick to point fingers at us for
          the cold-blooded murders of entire industries and timeless traditions,
          like wearing pants. After much online backlash, these articles near
          their end — which is how we've manage to kill the "How Millennials
          Killed" headlines. As this era of brilliant journalism draws its final
          breath, let's look back on all the things millennials have been blamed
          for.
        </Typography>
        <AllSubjects />
      </Box>
    </Container>
  );
};

export default Home;

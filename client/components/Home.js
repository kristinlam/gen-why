import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AllSubjects from './AllSubjects';

export const Home = () => {
  return (
    <Grid
      justify="center"
      alignItems="center"
      sx={{
        maxWidth: '60rem',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        sx={{
          background: 'rgba(255,255,255, 0.95)',
          boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, .3)',
          p: 4,
        }}
      >
        <Typography variant="h2" color="#a3a380">
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
      </Grid>
    </Grid>
  );
};

export default Home;

{
  /* <Container maxWidth="lg">
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
{/* <AllSubjects /> */
}
// </Container> */}

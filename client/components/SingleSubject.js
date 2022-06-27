import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { getSubject } from '../store/singleSubject';

const SingleSubject = (props) => {
  const subject = useSelector((state) => state.singleSubject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubject(props.match.params.id));
  }, [dispatch]);

  const articles = subject.articles || [];

  return (
    <Container maxWidth="md">
      <Box
        mt={10}
        sx={{
          background: 'rgba(255,255,255, 0.95)',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h3"
          color="#a3a380"
          fontWeight="300"
          align="center"
          mb={3}
        >
          {subject.name}
        </Typography>

        <ul>
          {articles.map((article) => (
            <li>
              <Link
                to={{
                  pathname: `${article.link}`,
                }}
                component={RouterLink}
                target="_blank"
                rel="noreferrer"
                variant="body1"
                underline="none"
                color="#a3a380"
                fontWeight="700"
              >
                {article.title}
              </Link>
              <span> • {article.source}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/"
          component={RouterLink}
          variant="body1"
          // underline="none"
          color="#333"
        >
          Go Back
        </Link>
      </Box>
    </Container>
  );
};

export default SingleSubject;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { getSubject } from '../store/singleSubject';

const SingleSubject = (props) => {
  const subject = useSelector((state) => state.singleSubject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubject(props.match.params.id));
  }, [dispatch]);

  const articles = subject.articles || [];

  return (
    <div>
      <h1>{subject.name}</h1>
      {articles.map((article) => (
        <div>
          <Link
            to={{
              pathname: `${article.link}`,
            }}
            component={RouterLink}
            target="_blank"
            rel="noreferrer"
            variant="body1"
            underline="none"
          >
            {article.title}
          </Link>
          <span> • {article.source}</span>
        </div>
      ))}
    </div>
  );
};

export default SingleSubject;

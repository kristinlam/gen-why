import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubject } from '../store/singleSubject';

export const SingleSubject = (props) => {
  console.log('props', props);
  const subject = useSelector((state) => state.singleSubject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubject(props.match.params.id));
  }, [dispatch]);

  const articles = subject.articles || [];
  console.log('articles', articles);

  return (
    <div>
      <h1>{subject.name}</h1>
      {articles.map((article) => (
        <div>
          <Link
            to={{
              pathname: `${article.link}`,
            }}
            target="_blank"
          >
            {article.title}
          </Link>
          <span> • {article.source}</span>
        </div>
      ))}
    </div>
  );
};

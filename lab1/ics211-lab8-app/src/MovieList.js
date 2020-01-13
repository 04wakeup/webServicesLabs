import React from 'react';
import styled from 'styled-components';
import StyledTitle from './Title';
import Movie from './Movie';
import { Link } from 'react-router-dom';

const MovieList = ({ className, movies }) => (
  <div className={className}>
    <StyledTitle />
    <ol>
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </ol>
    <Link to="/">Back to Form</Link>
  </div>
);

const StyledMovieList = styled(MovieList)`
  background-color: papayawhip;
  box-shadow: 0px 0px 5px gray;
  padding: 10px;
`;

export default StyledMovieList;

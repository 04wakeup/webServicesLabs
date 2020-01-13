import React from 'react';
import { StyledListItem } from './Styled';

const Movie = ({ name, link, color, checked }) => {
  if(checked) {
    return (
      <StyledListItem color={color}>
        {name}: <a href={link}>{link}</a>
      </StyledListItem>
    );
  } else return null;
};

export default Movie;

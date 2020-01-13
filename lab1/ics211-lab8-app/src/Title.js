import React from 'react';
import styled from 'styled-components';

const Title = ({ className }) => (
  <div className={className}>
    <h1>Favorite Movies</h1>
    <h3>by Jason Cumiskey</h3>
  </div>
);

const StyledTitle = styled(Title)`
  font-size: 18pt;
  font-family: sans-serif;
  color: navy;
  text-shadow: 2px 2px 4px #000;
`;

export default StyledTitle;

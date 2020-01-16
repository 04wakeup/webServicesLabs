import React from 'react'; 
import styled from 'styled-components';

class Header extends React.Component {
  
    render() { 
      return (
        <header>
            <StyledTitle>ICS 221 Message Board App</StyledTitle>
        </header>
      );
    }
  }
 
const StyledTitle = styled.h1` 
    background-color: #E9ECEF;
    font-family:  Calibri, Helvetica, sans-serif;
    margin: 1%;
    color: black;   
    padding: 5%;
    text-align: center;
    width: 70%;
`;
export default Header;

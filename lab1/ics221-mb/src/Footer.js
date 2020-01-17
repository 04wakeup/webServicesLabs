import React from 'react'; 
//import styled from 'styled-components';

class Footer extends React.Component {
  
    render() { 
      return (
        <footer className="text-right">
            {this.props.text}
        </footer>
      );
    }
  } 
//  </StyledCopyright>
//  <StyledCopyright>
// const StyledCopyright = styled.h3`  
//     font-family:  Calibri, Helvetica, sans-serif;
//     margin: 0%;
//     color: black;    
//     text-align: right;
   
// `;
//  width: 80%;
export default Footer;

import React from 'react'; 
import './index.css';  
import Header from './Header';
import Footer from './Footer'; 
import Contents from './Contents';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';  

class App extends React.Component {
    render() { 
      return (
        <div>
          <Container>
            <Row>
              <Col> 
                <Jumbotron>
                  <Header text={this.props.headerText} />
                </Jumbotron>
              </Col>
            </Row>   
            
            <Row> 
              <Col>
                <Contents />
              </Col>
            </Row> 

            <Row>
              <Col>
                  <Footer text={this.props.footerText} />
              </Col>
            </Row> 
          </Container>
        </div>
      );
    }
  } 

export default App;
import React from 'react'; 
import './index.css'; 
import ListTable from './ListTable'
import Header from './Header'
import Footer from './Footer'
import AddMessage from './AddMessage'

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
                 <AddMessage />
              </Col>
            </Row>
            <Row>
              <Col>
                <ListTable messages={this.props.messages} colText1={this.props.colText1} colText2={this.props.colText2} colText3={this.props.colText3}  />
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
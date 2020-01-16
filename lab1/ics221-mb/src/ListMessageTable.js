import React from 'react'; 
import './index.css'; 
import ListTable from './ListTable'
import Header from './Header'
import Footer from './Footer'

class ListMessageTable extends React.Component {
    render() {
      return (
        <div>
          <Header text={this.props.headerText} />
          <ListTable messages={this.props.messages} colText1={this.props.colText1} colText2={this.props.colText2} colText3={this.props.colText3}  />
          <Footer text={this.props.footerText} />
        </div>
      );
    }
  } 

export default ListMessageTable;
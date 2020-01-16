import React from 'react'; 
import './index.css'; 
import ListTable from './ListTable'
import Header from './Header'
import Footer from './Footer'

class ListMessageTable extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <ListTable messages={this.props.messages} />
          <Footer />
        </div>
      );
    }
  } 

export default ListMessageTable;
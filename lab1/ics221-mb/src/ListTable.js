import React from 'react'; 
import './index.css'; 
import ListRow from './ListRow' 
import Table from 'react-bootstrap/Table'; 

class ListTable extends React.Component {
    render() {
      const rows = [];     
      var i = 0;     // it's for key and line number 
      // option 1: count the row number
      // this.props.messages.forEach((eachLine) => {    
      //   i = i + 1; 
      //   rows.push(
      //     <ListRow message = {eachLine}   // 받아먹을 변수를 정의해서 값 할당 
      //              key={i} 
      //              seq={i}
      //     />
      //   ); 
      // });
      // option 2: use map, index for count the row number
      this.props.messages.map((message, index) => {
        rows.push(
            <ListRow message = {message}
                key={index}
                seq={index + 1}
            />
        );
      });
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      );
    }
  }

  export default ListTable;
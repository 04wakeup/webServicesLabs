import React from 'react'; 
import './index.css'; 
 
 class ListRow extends React.Component { 
    render() {
      const message = this.props.message;  // each data to msg   
      return (
        <tr>
          <td>{this.props.seq}</td> 
          <td>{message.name}</td>
          <td>{message.msg}</td>
        </tr>
      );
    }
  } 


  export default ListRow;
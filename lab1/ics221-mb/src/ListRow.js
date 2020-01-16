import React from 'react'; 
import './index.css'; 

 class ListRow extends React.Component {
    render() {
      const message = this.props.message;  // each data to msg 
  
      return (
        <tr>
          <td>{message.order}</td>
          <td>{message.name}</td>
          <td>{message.message}</td>
        </tr>
      );
    }
  } 


  export default ListRow;
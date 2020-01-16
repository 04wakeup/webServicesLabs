import React from 'react'; 
import './index.css'; 
import ListRow from './ListRow' 
 
class ListTable extends React.Component {
    render() {
      const rows = [];       
      this.props.messages.forEach((eachLine) => {  
        rows.push(
          <ListRow message = {eachLine}   // 받아먹을 변수를 정의해서 값 할당
          key={eachLine.order} />         // 마지막 라인에 추가됨
        ); 
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>{this.props.colText1}</th>
              <th>{this.props.colText2}</th>
              <th>{this.props.colText3}</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default ListTable;
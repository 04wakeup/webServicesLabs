import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 
import ListMessageTable from './ListMessageTable'

//  class ListRow extends React.Component {
//     render() {
//       const message = this.props.message;  // each data to msg 
  
//       return (
//         <tr>
//           <td>{message.order}</td>
//           <td>{message.name}</td>
//           <td>{message.message}</td>
//         </tr>
//       );
//     }
//   } 

// class ListTable extends React.Component {
//     render() {
//       const rows = [];       
//       this.props.messages.forEach((eachLine) => {  
//         rows.push(
//           <ListRow message = {eachLine}   // 받아먹을 변수를 정의해서 값 할당
//           key={eachLine.order} />         // 마지막 라인에 추가됨
//         ); 
//       });
  
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Message</th>
//             </tr>
//           </thead>
//           <tbody>{rows}</tbody>
//         </table>
//       );
//     }
//   }
    
//   class ListMessageTable extends React.Component {
//     render() {
//       return (
//         <div>
//           <Header />
//           <ListTable messages={this.props.messages} />
//           <Footer />
//         </div>
//       );
//     }
//   } 
  
  const MESSAGES = [
    {order: '1', name: 'Bill', message: 'Hi All!'}, 
    {order: '2', name: 'Ann', message: 'ICS 221 is fun'},
    {order: '3', name: 'Johnny', message: 'I\'m stranded!'},
    {order: '4', name: 'Barb', message: 'Hi'},
    {order: '5', name: 'Frank', message: 'Who\'s gired?'},
    {order: '6', name: 'Sarah', message: 'I heart React'}
  ];

  ReactDOM.render( 
    <ListMessageTable messages = {MESSAGES}/>,
    document.getElementById('root')
  );
 
serviceWorker.unregister();
 
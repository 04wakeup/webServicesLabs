import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker'; 
import ListMessageTable from './ListMessageTable'
import 'bootstrap/dist/css/bootstrap.min.css';

  const MESSAGES = [
    {order: '1', name: 'Bill', message: 'Hi All!'}, 
    {order: '2', name: 'Ann', message: 'ICS 221 is fun'},
    {order: '3', name: 'Johnny', message: 'I\'m stranded!'},
    {order: '4', name: 'Barb', message: 'Hi'},
    {order: '5', name: 'Frank', message: 'Who\'s gired?'},
    {order: '6', name: 'Sarah', message: 'I heart React'}
  ];

  const headerText = 'ICS 221 Message Board App';
  const footerText = '©2020 Jonghyun Choi';
  const colText1 = '#';
  const colText2 = 'Name';
  const colText3 = 'Message';

  ReactDOM.render( 
    <ListMessageTable messages={MESSAGES} headerText={headerText} footerText={footerText} colText1={colText1} colText2={colText2} colText3={colText3} />,
    document.getElementById('root')
  );
 
serviceWorker.unregister();
 
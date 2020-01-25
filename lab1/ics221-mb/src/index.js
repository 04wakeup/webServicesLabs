import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker'; 
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

  // const MESSAGES = [
  //   {order: '1', name: 'Bill', message: 'Hi All!'}, 
  //   {order: '2', name: 'Ann', message: 'ICS 221 is fun'},
  //   {order: '3', name: 'Johnny', message: 'I\'m stranded!'},
  //   {order: '4', name: 'Barb', message: 'Hi'},
  //   {order: '5', name: 'Frank', message: 'Who\'s gired?'},
  //   {order: '6', name: 'Sarah', message: 'I heart React'}
  // ]; 

  ReactDOM.render( 
    // <App messages={MESSAGES} />,
    <App />,
    document.getElementById('root')
  );
 
serviceWorker.unregister();
 
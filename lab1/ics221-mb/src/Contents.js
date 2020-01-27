import React from 'react';  
import AddMessage from './AddMessage';
import ListTable from './ListTable';
  
class Contents extends React.Component {
 constructor(props){
     super(props);
     this.state = {
        MESSAGES:[
          {order: '1', name: 'Bill', msg: 'Hi All!'}, 
          {order: '2', name: 'Ann', msg: 'ICS 221 is fun'}
        ]
     };
     this.newMessageCallback = this.newMessageCallback.bind(this);
 }

 newMessageCallback = (values) => { 
        // this.state.MESSAGES.unshift(values); option 1
        this.setState(
            {MESSAGES:[values, ...this.state.MESSAGES]}   // option 2
        );
        console.log(this.state.MESSAGES); 
        // console.log(this.state.MESSAGES.length); 
  }
   
    render() { 
      return (
        <div>
            <AddMessage newMessageCallback={this.newMessageCallback} />
            <ListTable  messages={this.state.MESSAGES} />
        </div>
      );
    }
  }

  export default Contents;

  
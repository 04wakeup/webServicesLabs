import React from 'react';  
import AddMessage from './AddMessage';
import ListTable from './ListTable';
  
class Contents extends React.Component {
 constructor(props){
     super(props);
     this.state = {
        MESSAGES:[
          // {order: '1', name: 'Bill', msg: 'Hi All!'}, 
          // {order: '2', name: 'Ann', msg: 'ICS 221 is fun'}
        ]
     };
     this.newMessageCallback = this.newMessageCallback.bind(this);
 }
 
 componentDidMount(){  
  fetch('http://10.21.75.38:3004/messages') 
      .then(response => response.json())
      .then((data) => {
          this.setState({MESSAGES: data})
          console.log(this.state.MESSAGES)
      })
      .catch(console.log)
}

 newMessageCallback = (values) => { 
        // this.state.MESSAGES.unshift(values); option 1
        // this.setState(  // 이하 4줄 살리고 !!!
        //     {MESSAGES:[values, ...this.state.MESSAGES]}   // option 2
        // );  
        (async () => {
          class HTTPError extends Error {}
        
          const response = await fetch('http://10.21.75.38:3004/messages', {
            method: 'POST',
            body: JSON.stringify({name: values.name, msg: values.msg}),
            headers: {
              'content-type': 'application/json'
            }
          });
        
          if (!response.ok) {
            throw new HTTPError('Fetch error:', response.statusText);
          }
        
          const parsed = await response.json(); 
          this.setState(   
                {MESSAGES: parsed}   // assign new data for refresh
            );
        })();
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

  
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
          // console.log(this.state.MESSAGES)
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
        
          // console.log('post response is ok received $$$$$$$$$$$$$');
          const parsed = await response.json(); 
          // here ->>> const results = Array.from(this.props.messages);
          const _parsed = JSON.stringify(parsed)  // convert object object to JSON 
          // console.log('the data will be 00>>>>>>>_+_+_+_+_+__:' + typeof(parsed)   );
          // console.log('the data will be 11>>>>>>>_+_+_+_+_+__:' + typeof(_parsed)   );
          // console.log('the data will be 22 >>>>>>>_+_+_+_+_+__:' + typeof(this.state.MESSAGES)    ); 
          // Question1: why parsed got error? below expression is working...
          // Answer -> make it as array using [] !!!
          this.setState(   
            {MESSAGES:[parsed, ...this.state.MESSAGES]}   // assign new data for refresh MESSAGES 에 얹어라..
            );
            // console.log('set State is completed #################');
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

  
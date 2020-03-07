import React from 'react';  
import AddMessage from './AddMessage';
import Login from './Login';
import ListTable from './ListTable';
  
class Contents extends React.Component {
 constructor(props){
     super(props);
     this.state = {
        MESSAGES:[ ],
        username: '', 
        password: '',
        loginYN: false     
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

        (async () => {
          class HTTPError extends Error {}
          
          // const userCredentials = { username: 'test', password: 'test1234' };
          const basicString = `${this.state.username}:${this.state.password}`; 

          const response = await fetch('http://10.21.75.38:3004/messages', {
            method: 'POST',
            body: JSON.stringify({name: values.name, msg: values.msg}),
            headers: {
              'content-type': 'application/json',
              'Authorization': `Basic ${btoa(basicString)}`
            }
          });
        
          if (!response.ok) {
            throw new HTTPError('Fetch error:', response.statusText);
          }
        
          // console.log('post response is ok received $$$$$$$$$$$$$');
          const parsed = await response.json(); 
          // here ->>> const results = Array.from(this.props.messages);
          // const _parsed = JSON.stringify(parsed)  // convert object object to JSON   
          // Question1: why parsed got error? below expression is working...
          // Answer -> make it as array using [] !!!
          this.setState(   
            {MESSAGES:[parsed, ...this.state.MESSAGES]}   // assign new data for refresh MESSAGES 에 얹어라..
            ); 
        })();
  }
  
  // # Login
  loginCallback = (values) => {   
        
      (async () => {
        class HTTPError extends Error {}
         
        console.log(values);
        const basicString = `${values.username}:${values.password}`; 

        const response = await fetch('http://10.21.75.38:3004/users', {
          method: 'GET', 
          headers: {
            'content-type': 'application/json',
            'Authorization': `Basic ${btoa(basicString)}`
          }
        });  
        
        if (!response.ok) {
          // throw new HTTPError('Fetch error:', response.statusText);
          alert("Login Failed!");
        } else{
          alert("Login Success!");
          this.setState(   
                {username: values.username,
                password: values.password,
                loginYN: true}
            ); 
        }
       
      })();
}

    render() { 
      return (
         
        <div>  
          {
            this.state.loginYN ? 
            <div>
              <AddMessage newMessageCallback={this.newMessageCallback} /> 
            </div> 
            :
            <div>
              <Login loginCallback={this.loginCallback}/>  
            </div> 
          } 
         
            
             
            <ListTable  messages={this.state.MESSAGES} />
        </div>
      );
    }
  }

  export default Contents;

  
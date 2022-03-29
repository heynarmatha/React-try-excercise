import React,{Component} from 'react';
import './App.css';
import Message from './Components/state';
import CounterClass from './Components/CounterClass';
class App extends Component{
  render(){
    return(
      <div className='App'>
        {/* <Message/> */}
        <CounterClass/>
      </div>
    )
  }
}
export default App;

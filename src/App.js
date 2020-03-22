import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam"
    }
  }
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do list
      </h4>

      </div>
    );
  }
}

export default App;

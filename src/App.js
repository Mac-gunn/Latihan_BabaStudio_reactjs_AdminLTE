import React, { Component } from 'react';
import Header from './content/Header';
import SideBar from './content/SideBar';
import Content from './content/Content';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <SideBar/>
        <Content/>
      </div>
    );
  }
}

export default App;

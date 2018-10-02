import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

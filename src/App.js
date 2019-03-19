import React, { Component, Fragment } from 'react';
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import './App.css'
class App extends Component {
  
  
  render() {
    return (
      <Fragment>
      <Header/>
      <Home/>
      <Footer/>
      </Fragment>
    );
  }
}

export default App;

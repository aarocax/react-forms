import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

// Data
import items from './data/sidebarlinks'

// assets
//import logo from './logo.svg';
//import './App.css';

class App extends Component {



  render() {
    const { children } = this.props;
    console.log(children.props.children[1].props);
    console.log(this.props.location.pathname);
    
    return (
      <div className="App">
        <Header />
        <Sidebar items={items} />
        <Content body={children} page={this.props.location.pathname} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

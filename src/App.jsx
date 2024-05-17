import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsBox from "./components/NewsBox";

// React Class Based Component
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      category: "general",
      country: "in",
    }    
  }

  async componentDidMount() {
    console.log("mounted from app");   
  }
  componentDidUpdate() {    
    console.log("updated from app");    
  }

  componentWillUnmount() {
    console.log("unmount from app");  
  }

  updateCategory = (value) => {
    this.setState({
      category: value,
      change : false
    });
  };

  render() {
    return (
      <>
        <Navbar
          state={this.state}
          setState={this.setState}
          updateCategory={this.updateCategory}
        />
        
        <NewsBox
          key={this.state.category}
          state={this.state}
          setState={this.setState}
          pageSize={20}
          category={this.state.category}
        />
      </>
    );
  }
}

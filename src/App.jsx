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
      country: "in"
    }    

    this.apiKey = import.meta.env.VITE_NEWS_API
  }

  async componentDidMount() {
    // console.log("mounted from app");   
  }
  componentDidUpdate() {    
    document.title = `NEWS 360° - ${this.state.category.toUpperCase()} NEWS`    
    // console.log("updated from app");    
  }

  componentWillUnmount() {
    // console.log("unmount from app");  
  }

  updateCategory = (value) => {    
    this.setState({
      category: value      
    });
  };

  updateCountry = (value) => {
    this.setState({
      country: value      
    });
  };

  render() {
    return (
      <>
        <Navbar
          state={this.state}
          setState={this.setState}
          updateCategory={this.updateCategory}
          updateCountry={this.updateCountry}          
        />
        
        <NewsBox
          key={`${this.state.category}-${this.state.country}`}
          state={this.state}
          setState={this.setState}
          pageSize={20}
          category={this.state.category}
          country={this.state.country}
          apiKey={this.apiKey}
        />
      </>
    );
  }
}

import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      category : "general"
    }
  }

  handleCategory = (value) => {    
    this.setState({
      category : value,      
    }, () => {
      // Callback function to be executed after state has been updated
      this.props.updateCategory(value)
      console.log("Updated category: ", this.state.category);
    });
  } 
  
  render() {    
    return (
      <>
        <div className="flex flex-wrap bg-black text-orange-700 border-2 border-orange-700">
          <div id="logo" className="px-4 pt-2 text-orange-700 animate-bounce cursor-default font-black text-4xl">
            NEWS 360°
          </div>
          <div className="px-4 py-3 text-white cursor-pointer" onClick={() => this.handleCategory("general")}>HOME</div>
          <div className="px-4 py-3 text-white cursor-pointer" onClick={() => this.handleCategory("business")}>BUSINESS</div>
          <div className="px-4 py-3 text-white cursor-pointer" onClick={() => this.handleCategory("entertainment")}>ENTERTAINMENT</div>
          <div className="px-4 py-3 text-white cursor-pointer" onClick={() => this.handleCategory("health")}>HEALTH</div>
          <div className="px-4 py-3 text-white cursor-pointer" onClick={() => this.handleCategory("science")}>SCIENCE</div>
          <div className="px-4 py-3 text-white cursor-pointer" onClick={() => this.handleCategory("sports")}>SPORTS</div>
          <div className="px-4 py-3 text-white cursor-pointer" onClick={() => this.handleCategory("technology")}>TECHNOLOGY</div>
          <div className="px-4 pt-4 text-white cursor-pointer text-xs" >Select Country</div>          
        </div>
      </>
    );
  }
}

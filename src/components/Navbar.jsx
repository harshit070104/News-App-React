import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      category : "general",
      country : "in"
    }
  }

  handleCategory = (value) => {    
    this.setState({
      category : value,      
    }, () => {
      // Callback function to be executed after state has been updated
      this.props.updateCategory(value)
      // console.log("Updated category: ", this.state.category);
    });
  } 

  handleCountry = (e) => {   
    // console.log(e.target.value) 
    this.setState({
      country : e.target.value,      
    }, () => {
      // Callback function to be executed after state has been updated
      this.props.updateCountry(e.target.value)
      // console.log("Updated country: ", this.state.country);
    });
  } 
  
  render() {    
    return (
      <>
        <div className="flex flex-wrap bg-black text-orange-700 border-2 border-orange-700 fixed w-full z-10 top-0">
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
          <select name="Select Country" id="country" className="bg-black text-green-500 h-full py-3 cursor-pointer" onChange={(e) => this.handleCountry(e)}>
            <option value="in" className="text-white">India</option>
            <option value="cn" className="text-white">China</option>
            <option value="il" className="text-white">Israel</option>
            <option value="jp" className="text-white">Japan</option>
            <option value="ru" className="text-white">Russia</option>
            <option value="za" className="text-white">South Africa</option>
            <option value="kr" className="text-white">South Korea</option>
            <option value="ua" className="text-white">Ukraine</option>
            <option value="gb" className="text-white">United Kingdom</option>
            <option value="us" className="text-white">United States</option>
          </select>
          {/* <input type="search" placeholder="search" className=" bg-black text-white w-20 text-center border border-white h-min py-3" /> */}
        </div>        
      </>
    );
  }
}

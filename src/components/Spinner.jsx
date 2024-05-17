import React, { Component } from "react";
import loading from "./11905d22fa2ce6f2bd9af89be7d51d12.gif";

export default class Spinner extends Component {
  render() {
    return (
      <center>
        <div className="text-center bg-[#171717] h-[90vh] w-full flex justify-center items-center ">
          <img
            src={loading}
            alt="loading"
            className="h-24 w-28 rounded-3xl filter grayscale"
          />
          <br />
        </div>
      </center>
    );
  }
}

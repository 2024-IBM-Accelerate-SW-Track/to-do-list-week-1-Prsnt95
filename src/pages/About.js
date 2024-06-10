import React, { Component } from "react";
import "./About.css";
import pfp from "../assets/pfp.png";
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={pfp} // Image goes here
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              Hi my name is Prashant, I am a computer science major and rising
              junior at Northwestern Univeristy. I like to play soccer.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

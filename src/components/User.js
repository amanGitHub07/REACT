import React, { Component } from "react";
import { useState } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { name, title, contact, location } = this.props;
    return (
      <div className="user-card">
        {this.state.count}
        {this.state.count2}
        <h1>Name: {name}</h1>
        <h2>Title: {title}</h2>
        <h3>Contact: {contact}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default User;

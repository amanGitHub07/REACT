import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(){
    super();
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent componentDidMount");
  }

  componentWillMound(){
    console.log("Parent componentWillUnmount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the about us page.</p>
        <UserClass
          name="First Agrawal class()"
          title="Sr.Software Engineer"
          contact="aman.agrawal@example.com"
          location="Pune, India"
        />
          <UserClass
          name="Second Agrawal class()"
          title="Sr.Software Engineer"
          contact="aman.agrawal@example.com"
          location="Pune, India"
        />
      </div>
    );
  }
}
export default AboutUs;

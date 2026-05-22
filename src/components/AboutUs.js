import React from 'react';
import User from './User';
import UserClass from './UserClass';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about us page.</p>
      <User name="Aman Agrawal function()" title="Software Engineer" contact="aman.agrawal@example.com" location="Pune, India" />
      <UserClass name="Aman Agrawal class()" title="Sr.Software Engineer" contact="aman.agrawal@example.com" location="Pune, India" />
    </div>
  );
};

export default AboutUs;

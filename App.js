import React from "react";
import ReactDOM from "react-dom/client";


/*
1. HeaderComponent
  - Logo
  - Nav Items

2. Body
  - Search 
  - Restaurant Container
  - Restaurant Card
    - Image
    - Name
    - Cuisine
    - Rating
3. Footer
  - Links
  - Copyright
  - Contact
  - Address

  Always build from top level component.
*/

const HeaderComponent = () => {
  return (
    <div className = "header">
      <div className = "logo-container">
        <div className="logo">
          <img src="http://logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All" alt="logo" className="logo"/>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};


const RestaurantCard = () =>{
  return (
    <div className = "res-card">
        <img className="res-logo" alt="Restaurant Logo" src="https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/l-intro-1733153567.jpg"></img>
        <h3>Atithi</h3>
        <h4>North Indian, Chinese</h4>
        <h4>4.5 Stars</h4>
        <h4>25 minutes</h4>
    </div>
  )
};
const Body = () => {
  return(
      <div className = "body">
          <div className="search">
            Search 
          </div>
          <div className="res-container">
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />

          </div>
      </div>
  )
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

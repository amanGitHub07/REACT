import { LOGO_URL } from "../utils/constant";
import {useState} from "react";


const HeaderComponent = () => {
  const [btnState,setBtnState] = useState("Login");
  return (
    <div className = "header">
      <div className = "logo-container">
        <div className="logo">
          <img src={LOGO_URL} alt="logo" className="logo"/>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-button" onClick={()=>{
            btnState === 'Login' ? setBtnState('Logout') : setBtnState('Login');
          }}>{btnState}</button>
        </ul>
      </div>
    </div>
  )
};

export default HeaderComponent;

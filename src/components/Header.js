import { LOGO_URL } from "../utils/constant";
import {useState} from "react";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
  const [btnState,setBtnState] = useState("Login");
  return (
    <div className = "header">
      <div className = "logo-container">
        <div className="logo">
          <Link to="/"><img src={LOGO_URL} alt="logo" className="logo"/></Link>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
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


import { Logo_img } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Header = () => {

  // let btnName = "Login";

  const onlineStatus = useOnlineStatus(); 

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Headeer Render");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={Logo_img}
          alt="App Logo of  food app "
          className="logo"
        />  
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus ? " ✅" : "❌"}
          </li> 
          <li> 
            <Link  to="/" className="links"  > Home </Link>
          </li>
          <li>
            <Link to="/Contact" className="links" > Contact us </Link>
          </li>
          <li>
            <Link to="/About" className="links" >About us</Link>
          </li>
          <li>
            <Link to="/Grocery" className="links" >About us</Link>
          </li>
          <li>Cart</li>
          <button className="login"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); 
            }
            } > {btnNameReact} </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
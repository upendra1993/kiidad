import React from "react";
import { Link } from "react-router-dom";
import "../scss/custom.scss";
import Search from "./Search";
import { useState } from 'react';
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "../helpers/axios";


const Header = () => {
  const [CartItems, SetcartItems] = useState([]);
  const userName = {}

  async function onAuthcheck(){
    
    const promise = axios.get('get_user');
    promise.then(res => {
    const auth_Details = res.data.user;
    let authName = auth_Details.name;
    userName = authName;
    return authName;
    // let authName = auth_Details.name;
     console.log(authName);
    });
    
  }

 
  
  
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-4 text-right main-logo">
              
            </div>
            <div className="col-md-4 t-center">
              <Link  to="/">
                <img className="main-logo-1" style={{maxWidth : "24px"}}
                  alt="logo"
                  src="../../images/main_logo.png" 
                />
                <img style={{maxWidth : "90px"}}
                  alt="logo"
                  src="../../images/main_logo2.png" 
                />
              </Link>
            </div>
            
            <div className="col-md-4 t-right header-profile-area">
              <Search />
              <div className="position-relative d-inline mr-3 ml-3">
                <Link to="/cart" className="btn btn-primary">
                  <IconCart3 className="i-va" />
                  <div className="position-absolute top-0 left-100 translate-middle badge bg-danger rounded-circle">
                  Test
                  </div>
                </Link>
              </div>
              <button className="auth" on onClick={onAuthcheck}>On Authcheck</button>
              <div className=""><h2>{userName}</h2></div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary bg-black rounded-circle border mr-3 dropdown-toggle1"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                >
                  
                  <FontAwesomeIcon icon={faUser} className="text-light" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      <IconPersonBadgeFill /> My Profile
                    </Link>
                  </li>
                
              
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      <IconBellFill className="text-primary" /> Notification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/support">
                      <IconInfoCircleFill className="text-success" /> Support
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to="/">
                      <IconDoorClosedFill className="text-danger" /> Logout
                    </Link>
                  </li> */}
                </ul>
              </div>
             
              {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;

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
import toast from "react-hot-toast";



const Header = () => {
  const [CartItems, SetcartItems] = useState([]);
  const [Username,SetUsername] = useState('null');
  const [Authdetails, SetAuthdetails] = useState([]);

  function userlogout() {
    axios.post('logout');
    window.localStorage.clear(); 
    window.location.reload();
    toast.success('Logout Successful');
    
  }

  async function onAuthcheck(){

    try{
    const promise = axios.get('get_user');
    promise.then(res => {
    let auth_Details = res.data.user;
    let authName = auth_Details.name;
    SetAuthdetails(auth_Details);
    SetUsername(authName);
    // console.log(authName);
    });



    }catch (e){
      
    }
   
  }

 
  
  return (
    
    <React.Fragment>
      <header className="p-3 border-bottom bg-light" onLoad={onAuthcheck}>
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
                  {/* 2 */}
                  </div>
                </Link>
              </div>
              
              <div className="btn-group">
               
                
                {Username === 'null' ? 
               <React.Fragment>
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
                  <Link className="dropdown-item" to="/account/signin"> 
                    <IconPersonBadgeFill /> Sign In
                  </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup"> 
                    <IconPersonBadgeFill /> Sign Up
                    </Link>
                  </li>
                </ul>
              </React.Fragment>
                : 
                <React.Fragment>
                <button
                 type="button"
                 className="btn btn-secondary bg-black rounded-circle border dropdown-toggle1"
                 data-toggle="dropdown"
                 aria-expanded="false"
                 aria-label="Profile"
               >
               <FontAwesomeIcon icon={faUser} className="text-light" />
               
               </button>
               <h6 className="mt-2 ml-1"> {Username}</h6>
               {/* <h6 className="mt-2 ml-1"> {Authdetails.email}</h6> */}
                <ul className="dropdown-menu">
                  <li>
                    <Link  
                    className="dropdown-item" 
                    to= {{
                      pathname:'/account/profile',
                      
                    }}
                    
                    >
                      <IconPersonBadgeFill /> My Profile
                    </Link>
                    <Link className="dropdown-item" to="/account/profile" onClick={userlogout}>
                      <IconPersonBadgeFill /> LogOut
                    </Link>
                  </li>
                </ul>
                </React.Fragment>
                }
                
                
              </div>
             
              {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
export default Header;

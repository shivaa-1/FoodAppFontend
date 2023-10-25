import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';
const Header= ()=>{
  // console.log(userToken);
    return(
        <>
            <div className="header">
              <div className="header-section">
                <div className="container justify-center">
                  <div className="navbar">
                    <div className="add-restaurant link">
                      <Link to="/addrestaurant" className="restaurantadmin">Add Restaurant</Link> 
                    </div>
          
                    <div className="login link">
                      <Link to="/userlogin" className="loginuser">Login</Link> 
                    </div>

                    <div className="register link">
                      <Link to="/userregister" className="registeruser">SignUp</Link>
                    </div>
                  
                  </div>  
                    <div className="navbar-center">
                      <div className="center-container">
                        <h1>Food App</h1>
                      </div>
                      <div className="center-container">
                        <h3>Discover The Best Food & Drinks In Your Location</h3>
                      </div>
                    </div>            
                </div>

              </div>
            </div>   
        </>
    )
}

export default Header;
import React from "react";
import './AdminHeader.css';
import { Link } from "react-router-dom";

const AdminHeader=()=>{
    return(
        <>
        <div className="header">
              <div className="header-section">
                <div className="container justify-center">
                  <div className="navbar">
                    <div className="navbar-logo">
                        <h2>Food App</h2>
                        <h6>For Buisness</h6>
                    </div>
                    <div className="nav-links">
          
                    <div className="login nav-link">
                      <Link to="/restaurantlogin" className="loginuser border-2 border-white px-2 py-2 rounded-lg">Login</Link> 
                    </div>

                    <div className="register nav-link media">
                      <Link to="/restaurantregister" className="registeruser bg-blue-400 px-2 py-2 rounded-lg">Create Account</Link>
                    </div>
                    </div>
                  
                  </div>  
                    <div className="nav-center">
                      <div className="buttons">
                        <Link to="/restaurantregister" className="bg-blue-400 px-12 py-6 rounded-lg">Register your restaurant</Link>
                      </div>
                      <div className="buttons">
                        <Link to="/restaurantlogin" className="button bg-white px-12 py-6 rounded-lg">Login to view your existing restaurants</Link>
                      </div>
                    </div>            
                </div>

              </div>
            </div>
        </>
    )
};

export default AdminHeader;
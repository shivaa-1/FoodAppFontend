import React from "react";
import './RestaurantAdmin.css';
import AdminHeader from "../AdminHeader/AdminHeader";
import HowItWork from "../HowItWork/HowItWork";
import AboutCard from "../AboutCard/AboutCard";
import Testimonial from "../Testimonial/Testimonial";

const RestaurantAdmin =()=>{
    return(
        <>
        <AdminHeader/>
        <div className="how-work my-5">
            <div className="container p-3">
            <div className="headin text-center my-4">
          <h1>How it Works?</h1>
        </div>
            <HowItWork/>
            </div>
        </div>
        <div className="about-card">
            <div className="card-container">
                <AboutCard/>
            </div>
        </div>
        <div className="testimonial">
            <Testimonial/>
        </div>
        </>
    )
}

export default RestaurantAdmin;
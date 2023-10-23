import React from "react";
import { Link } from "react-router-dom";

const StaticCards = ()=>{
    return(
        <>
<div className="row row-cols-1 row-cols-md-3 g-4">
  
  <Link to="/userlogin">
  <div className="col hover:bg-slate-200">
    <div className="card">
    <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Order Online</h5>
        <p className="card-text">Stay home and order to your doorstep</p>
      </div>
    </div>
  </div>
  </Link>

  <Link to="/userlogin">
  <div className="col">
    <div className="card">
    <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dining</h5>
        <p className="card-text">View the city's favourite dining venues</p>
      </div>
    </div>
  </div>
  </Link>
  
  <Link to="/userlogin">
  <div className="col">
    <div className="card">
    <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Nightlife and Clubs</h5>
        <p className="card-text">Explore the city's top nightlife outlets</p>
      </div>
    </div>
  </div>
  </Link>

</div>


        </>
    )
}

export default StaticCards;
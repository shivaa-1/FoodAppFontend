import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWork.css';

const HowItWork = () => {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <Link to="/restauarntregister">
  <div className="col hover:bg-slate-200">
    <div className="card">
    <img src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Step 1</h5>
        <p className="card-text">Create your page on FoodApp</p>
      </div>
    </div>
  </div>
  </Link>

  <Link to="/restaurantregister">
  <div className="col">
    <div className="card">
    <img src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Step 2</h5>
        <p className="card-text">Register for online ordering</p>
      </div>
    </div>
  </div>
  </Link>
  
  <Link to="/restaurantregister">
  <div className="col">
    <div className="card">
    <img src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Step 3</h5>
        <p className="card-text">Start receiving orders online</p>
      </div>
    </div>
  </div>
  </Link>

</div>
        </>        
    );
}

export default HowItWork;

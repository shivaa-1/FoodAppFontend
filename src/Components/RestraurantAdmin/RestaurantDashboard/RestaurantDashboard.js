import React, { useEffect } from 'react';
import HomePageHeader from '../HomepageHeader/HomePageHeader';
import { useNavigate } from 'react-router-dom';
import RestaurantCards from '../RestaurantCards/RestaurantCards';

const RestaurantDashboard = ({restaurantToken,setRestaurantToken}) => {
    const navigate = useNavigate();
// console.log(restaurantToken);
    
    return (
        <div>
            <HomePageHeader restauranttoken={restaurantToken} setRestauranttoken={setRestaurantToken} />
            <div className='my-5'>
            <RestaurantCards restauranttoken={restaurantToken} setRestauranttoken={setRestaurantToken} />
            </div>
        </div> 
    );
}

export default RestaurantDashboard;

import React from 'react';
import HomePageHeader from '../HomepageHeader/HomePageHeader';
import { useNavigate } from 'react-router-dom';
import RestaurantCards from '../RestaurantCards/RestaurantCards';

const RestaurantDashboard = ({restaurantToken,setRestaurantToken}) => {
    const navigate = useNavigate();
    return (
        <div>
            <HomePageHeader restauranttoken={restaurantToken} setRestauranttoken={setRestaurantToken} />
            <RestaurantCards restauranttoken={restaurantToken} setRestauranttoken={setRestaurantToken} />
        </div> 
    );
}

export default RestaurantDashboard;

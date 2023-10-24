import React from 'react';
import CustomerHeader from '../CustomerHeader/CustomerHeader';
import FoodCard from '../FoodCards/FoodCard';

const CustomerDashboard = () => {
    return (
        <>
        <CustomerHeader/>
        <div className='my-5'>
            <FoodCard/>
        </div>
        </>
        
    );
}

export default CustomerDashboard;

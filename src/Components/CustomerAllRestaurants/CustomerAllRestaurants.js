import {React,useState,useEffect} from 'react';
import axios from 'axios';

const CustomerAllRestaurants = () => {
    const [restaurants,setRestaurants]=useState([]);

    const allRestaurantUrl ="https://foodapp-szso.onrender.com/api/restaurantuser/all";

    useEffect(()=>{
        axios.get(allRestaurantUrl).then((response)=>{
            // console.log(response.data.data.restaurants);
            setRestaurants(response.data.data.restaurants);
        })
    },[]);

    return (

        <>
        <h1 className='text-center font-bold text-xl font-7 my-5'>All Restaurants</h1>
        <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center my-5 justify-center lg:h-screen">
      <div className="container mx-auto mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {/* <!-- Replace this with your grid items --> */}
          {restaurants.map((items)=>{
            return(
                <div className="bg-white rounded-lg border p-4" key={items._id}>
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">{items.restaurantName}</div>
              <p className="text-gray-700 text-base">
              <span className='font-bold'>Address:           </span>
                
                {items.address}
              </p>
              <p className="text-gray-700 text-base">
                <span className='font-bold'>Opens At:         </span>

                {items.openingtime}
              </p>
              <p className="text-gray-700 text-base">
                <span className='font-bold'>Closes At:       </span>
                
                {items.closingtime}
              </p>
            </div>
          </div>
            )
          })}
          
          {/* <!-- Add more items as needed --> */}
        </div>
      </div>
    </div>
        
        </>

    );
}

export default CustomerAllRestaurants;

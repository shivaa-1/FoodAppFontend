import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RestaurantCards = () => {
    const[restaurantToken,setRestaurantToken]=useState(localStorage.getItem("restaurant-token"));
    console.log(restaurantToken);
    const[foodCards,setFoodCards]=useState([]);
    const restaurantItemsUrl= "http://localhost:7000/api/restaurantuser/restaurant"
    let config = { headers:{ Authorization: `Bearer ${restaurantToken} `}};

    useEffect(()=>{
        axios.get(restaurantItemsUrl,config).then((response)=>{
            console.log(response.data.data.restaurant[0].menu);
            setFoodCards(response.data.data.restaurant[0].menu);
        },[])
    });

    return (
        <>
        <div class="py-20">
        <div class="container">
            <div class="mx-auto max-w-4xl sm:text-center">
                <img src="assets/images/landing/index-21.png" class="w-40 mx-auto" alt=""/>
                {/* <h2 class="md:text-5xl text-3xl font-semibold tracking-tight">{foodCards.itemName}</h2> */}
                <div class="flex justify-center">
                    <p class="md:w-1/2 mt-6 text-xl/8 font-medium text-gray-500 dark:text-gray-400">We specialise in organising professional training courses.</p>
                </div>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                {foodCards.map((items)=>{
                    console.log(items);
                    return(
                        <div class="p-7 rounded-xl bg-gray-500" key={items._id}>
                            
                                <img src={items.picture} className="card-img-top" alt="..."/>
                                
                                    <h2 className="cardsd-title text-xl font-semibold">{items.itemName}</h2>
                                    <p className="cardds-text">{items.quantity}</p>
                                    {/* <p className='price'>	&#8377; {items.}</p> */}
                            
                        </div>
                    )            
                })}
            </div>
        </div>
    </div>
            
        </>
    );
}

export default RestaurantCards;

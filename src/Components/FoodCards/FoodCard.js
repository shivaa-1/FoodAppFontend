import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodCard = () => {
    const [foodCards,setFoodCards]=useState([]);

    const itemsUrl = "http://localhost:7000/api/restaurantuser/allitems"
    
    useEffect(()=>{
        axios.get(itemsUrl).then((response)=>{
            setFoodCards(response.data);
        })
    },[]);

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
                            
                                <img src={items.photo} className="card-img-top" alt="..."/>
                                
                                    <h2 className="cardsd-title text-xl font-semibold">{items.itemName}</h2>
                                    <p className="cardds-text">{items.description}</p>
                                    <p className='price'>	&#8377; {items.price}</p>
                                
                        

                        {/* <h3 class="text-xl font-semibold mb-7">{items.itemName}</h3>
                        <p class="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                            {items.description}
                        </p>
                        <a href="#" class="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 dark:bg-neutral-900 dark:hover:bg-purple-500 dark:hover:text-white ">{items.quantity}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" h-5 w-5 ms-3">
                                <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </a> */}
                        </div>
                    )            
                })}
            </div>
        </div>
    </div>
        </>
    );
}

export default FoodCard;


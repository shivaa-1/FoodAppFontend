import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FoodCard = () => {

    const[foodItems,setFoodItems]=useState(0);

    localStorage.setItem("cartCount",foodItems);

    const handleItemIncrement =()=>{
        setFoodItems(foodItems+1);
    };

    const handleItemdecrement=()=>{
        if(foodItems===0){
            return
        }else{
        setFoodItems(foodItems-1)
        }
    };

    const [foodCards,setFoodCards]=useState([]);

    const itemsUrl = "https://foodapp-szso.onrender.com/api/restaurantuser/allitems"
    
    useEffect(()=>{
        axios.get(itemsUrl).then((response)=>{
            // console.log(response);
            setFoodCards(response.data);
            // localStorage.setItem("FoodItems")
        })
    },[]);


    return (
        <>
        <div class="py-20">
        <div class="container">

            <div class="grid my-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                {foodCards.map((items)=>{
                    // console.log(items);
                    return(
                        <div class="text-center rounded-lg bg-gray-500" key={items._id}>

                                <img src={items.picture} className="card-img-top" alt="..."/> 

                            <div className='flex justify-around mt-2'>                     
                            <div className='mt-3'>
                                <button onClick={handleItemdecrement} className="decrement"><RemoveIcon/></button>
                            </div>    
                                
                            <div>                              
                                
                                <h2 className="cardsd-title text-xl font-semibold">{items.itemName}</h2>
                                <p className="cardds-text">{items.description}</p>
                                <p className='price'>	&#8377; {items.price}</p>
                                <p>{foodItems}</p>
                            </div>    

                            <div className='mt-3'>
                                <button onClick={handleItemIncrement} className="inceremnt"><AddIcon/></button>  
                            </div>    

                            </div>                                

                            
                        
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


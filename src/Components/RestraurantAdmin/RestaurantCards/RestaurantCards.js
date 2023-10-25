import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const RestaurantCards = () => {
    const[restaurantToken,setRestaurantToken]=useState(localStorage.getItem("restaurant-token"));
    // console.log(restaurantToken);
    const[foodCards,setFoodCards]=useState([]);
    const navigate =useNavigate();

    const restaurantItemsUrl= "http://localhost:7000/api/restaurantuser/restaurant"
    let config = { headers:{ Authorization: `Bearer ${restaurantToken} `}};

    useEffect(()=>{
        if(restaurantToken===null){
            alert("Please Login Again.....")
            navigate("/addrestaurant")
        }else{
            navigate("/restaurantdashboard")
        }
    },[restaurantToken,navigate]);

    useEffect(()=>{
        // console.log("rerender")
        try {
            axios.get(restaurantItemsUrl,config).then((response)=>{
                // console.log(response.data.data.restaurant[0].menu);
                setFoodCards(response.data.data.restaurant[0].menu);            
            })
            
        } catch (error) {
            console.log(error);
        }
        
    },[]);

    const handleDelete=(id)=>{
        // console.log(id);
        const deleteUrl =`http://localhost:7000/api/restaurantadmin/removeitem/${id}`;

        axios.delete(deleteUrl).then((response)=>{
            // console.log(response);
            alert("Food Item Removed Successfully....")
        })

        };

    return (
        <>
        <div className="py-20">
        <div className="container">            

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                {foodCards.map((items)=>{
                    // console.log(items);
                    return(
                        
                        <div className=" rounded-lg bg-gray-500 text-center" key={items._id}>
                        

                            <img src={items.picture} className="card-img-top" alt="..."/>

                            <div className='d-flex food-card'>   
                            <div className='left-part w-90'>
                            
                                <h2 className="cardsd-title text-xl font-semibold">{items.itemName}</h2>
                                <p className="cardds-text">Quantity - {items.quantity}</p>
                                <p>&#8377; {items.price}</p>
                                <p>{items.description}</p>
                        
                            </div>
                            <div className='right-part'>
                                <div className='my-2'>
                                <Link to={`/editfooditem/${items._id}`} className='mx-5'><EditIcon/></Link>
                                </div>
                                <div className="mt-2">
                                <button onClick={()=>handleDelete(items._id)} className='stroke-2'><DeleteForeverIcon/></button>
                                </div>
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

export default RestaurantCards;

import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const CreateFoodItem = () => {

  const[restaurantToken,setRestaurantToken]=useState(localStorage.getItem("restaurant-token"));
  console.log(restaurantToken);
    const[foodItems,setFoodItems]=useState({
        itemName:"",
        quantity:"",
        price:"",
        description:"",
        picture:""
    });

    // console.log(restaurantToken);

    const {itemName,quantity,price,description,picture}=foodItems;
    console.log(foodItems);

    const handleChange = (e)=>{
        setFoodItems({...foodItems,[e.target.name]:e.target.value})
    };

    const navigate = useNavigate();

    // if(restaurantToken==null||restaurantToken==""||!restaurantToken){
    //     alert("Please Login Again...")
    //     return navigate('/restaurantadmin')
    // };

        const handleSubmit=async (e)=>{
            e.preventDefault();

            const itemUrl = "http://localhost:7000/api/restaurantadmin/createfooditem"

            // let config = {headers:{Authorization:}}

            let config = {headers: { Authorization: `Bearer ${restaurantToken}` }};

        axios.post(itemUrl,{
            itemName,
            quantity,
            description,
            price,
            picture
        },config).then((response)=>{
            console.log(response);
            alert("Item Created Successfully....")
            navigate("/restaurantdashboard")
        }).catch((error)=>{
            console.log(error)
            })

        }
    
    return (
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
    <div className='flex justify-between ml-4'>
      <div>
        {/* <Link to={'/'} className="bg-blue-500 rounded-lg shadow-lg shadow-blue-500/50 px-5 py-2">Login</Link> */}
      </div>
      <div>
      {/* <Link to={'/restaurantregister'} className="bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/50 px-5 py-2">SignUp</Link> */}
      </div>
  
    </div>
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Fill to add some items in your list</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
      <div>
        <label for="itemname" className="block text-sm font-medium leading-6 text-gray-900">Item Name</label>
        <div className="mt-2">
          <input id="itemname" name="itemName" type="itemname" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantiy</label>
        </div>
        <div className="mt-2">
          <input id="quantity" name="quantity" type="number" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
        </div>
        <div className="mt-2">
          <input id="price" name="price" type="number" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
        </div>
        <div className="mt-2">
          <input id="description" name="description" type="description" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="picture" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
        </div>
        <div className="mt-2">
          <input id="picture" name="picture" type="url" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </form>
  </div>
</div>
        
        </>
    );
}

export default CreateFoodItem;

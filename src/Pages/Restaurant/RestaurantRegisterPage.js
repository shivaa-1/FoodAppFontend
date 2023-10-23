import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RestaurantRegisterPage =()=>{
  const navigate = useNavigate();

  const[formData,setFormData]=useState({
    restauarntName:"",
    restaurantemail:"",
    address:"",
    openingtime:"",
    closingtime:"",
    password:""
  });

  const{restaurantName,restaurantemail,address,openingtime,closingtime,password}=formData;

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const registerUrl = "http://localhost:7000/api/restaurantuser/register";

    axios.post(registerUrl,{
      restaurantName,
      restaurantemail,
      address,
      openingtime,
      closingtime,
      password
    }).then((response)=>{
      console.log(response);
      alert("Restauarnt Register Successfully...")
      navigate('/');
    }).catch((error)=>{
      console.log(error);
      alert("Restaurant Register Failed Please Try Again...")
    });

  }
    return(
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <div className='flex justify-between ml-4'>
      <div>
        {/* <Link to={'/'} className="bg-blue-500 rounded-lg shadow-lg shadow-blue-500/50 px-5 py-2">Login</Link> */}
      </div>
      <div>
      <Link to={'/restaurantlogin'} className="bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/50 px-5 py-2">Login</Link>
      </div>
  
    </div>
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create An Account To Add a Restaurant</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
    <div>
        <label for="restaurantname" className="block text-sm font-medium leading-6 text-gray-900">Restaurant Name</label>
        <div className="mt-2">
          <input id="restaurantname" name="restaurantName" type="text" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>


      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="restaurantemail" type="email" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
        <div className="mt-2">
          <input id="address" name="address" type="address" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="openingtime" className="block text-sm font-medium leading-6 text-gray-900">Opening Time</label>
        <div className="mt-2">
          <input id="openingtime" name="openingtime" type="time" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="closingtime" className="block text-sm font-medium leading-6 text-gray-900">Closing Time</label>
        <div className="mt-2">
          <input id="closingtime" name="closingtime" type="time" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-800">
    Already a member?
      <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-800">Login Here</Link>
    </p>
  </div>
</div>
        </>
    )
}

export default RestaurantRegisterPage;
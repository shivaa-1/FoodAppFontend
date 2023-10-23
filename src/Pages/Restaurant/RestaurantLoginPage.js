import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const RestauarntLoginPage=()=>{

    const navigate = useNavigate();
    
    const [formData,setFormData]=useState({
        restaurantemail:"",
        password:""
    });

    const {restaurantemail,password}=formData;

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit =(e)=>{
        e.preventDefault();

        const loginUrl="http://localhost:7000/api/restaurantuser/login"

        axios.post(loginUrl,{
            restaurantemail,
            password
        }).then((response)=>{
          console.log(response.data);
            alert("Login Successfully...")
            if(response.status===200){
              localStorage.setItem("restaurant-token",response.data.token)
            };
            navigate('/restaurantdashboard');
        }).catch((error)=>{
            console.log(error);
            alert("Login Failed...")
        })
    };

    return(
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
    <div className='flex justify-between ml-4'>
      <div>
        {/* <Link to={'/'} className="bg-blue-500 rounded-lg shadow-lg shadow-blue-500/50 px-5 py-2">Login</Link> */}
      </div>
      <div>
      <Link to={'/restaurantregister'} className="bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/50 px-5 py-2">SignUp</Link>
      </div>
  
    </div>
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in For Restaurant Admin Only</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="restaurantemail" type="restaurantemail" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <Link to="/" className="font-semibold text-indigo-900 hover:text-indigo-700">Forgot password?</Link>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-800">
      Not a member?
      <Link to="/restaurantregister" className="font-semibold leading-6 text-black-600 hover:text-indigo-800">Register Here</Link>
    </p>
  </div>
</div>
        </>
    )

}

export default RestauarntLoginPage;
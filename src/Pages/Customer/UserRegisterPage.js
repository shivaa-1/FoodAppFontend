import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserRegisterPage = () => {

  const navigate=useNavigate();

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    mobile_no:"",
    password:""
  });


  const {name,email,mobile_no,password}=formData;

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const registerUrl = "http://localhost:7000/api/users/register";

    axios.post(registerUrl,{
      name,
      email,
      mobile_no,
      password
    }).then((response)=>{
      // console.log(response);
      alert("Register Succesfully...");
      navigate('/');
    }).catch((error)=>{
      // console.log(error);
      alert("Registeration Failed...");
    })
  };

    return (
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
    <div className='flex justify-between ml-4'>
      <div>
        {/* <Link to={'/'} className="bg-blue-500 rounded-lg shadow-lg shadow-blue-500/50 px-5 py-2">Login</Link> */}
      </div>
      <div>
      <Link to={'/userlogin'} className="bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/50 px-5 py-2">Login</Link>
      </div>
  
    </div>
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create An Account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
      
    <div>
        <label for="name" className="block text-sm font-medium leading-6 text-gray-900">UserName</label>
        <div className="mt-2">
          <input id="name" name="name" type="text" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>


      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="phoneno" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
        <div className="mt-2">
          <input id="mobile_no" name="mobile_no" type="number" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
      <Link to="/" className="font-semibold leading-6 text-blue-700 hover:text-indigo-800">Login Here</Link>
    </p>
  </div>
</div>
        </>
    );
}

export default UserRegisterPage;

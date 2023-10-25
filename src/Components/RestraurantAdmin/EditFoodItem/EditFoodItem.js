import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditFoodItem = () => {
  const {id} =useParams();
  const navigate=useNavigate();
  // console.log(id);
    const[formData,setFormData]=useState({
        itemName:"",
        quantity:"",
        price:"",
        description:"",
        picture:""
    });

    const{itemName,quantity,price,description,picture}=formData;

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const editUrl = `http://localhost:7000/api/restaurantadmin/updateitem/${id}`

        axios.put(editUrl,{
          itemName,
          quantity,
          price,
          description,
          picture
        }).then((response)=>{
          // console.log(response);
          alert("Item Updated Successfully");
          navigate("/restaurantdashboard");
        }).catch((error)=>{
          console.log(error)
        })
    };


    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h4 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Add new item to your restaurant</h4>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
      <div>
        <label for="itemName" className="block text-sm font-medium leading-6 text-gray-900">Item Name</label>
        <div className="mt-2">
          <input id="itemName"  name="itemName" type="itemName" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
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
          <input id="description" name="description" type="text" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="picture" className="block text-sm font-medium leading-6 text-gray-900">Picture</label>
        </div>
        <div className="mt-2">
          <input id="picture" name="picture" type="url" onChange={handleChange} autocomplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

  </div>
</div>
    );
}

export default EditFoodItem;

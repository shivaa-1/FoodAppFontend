import React from "react";
import { Link } from "react-router-dom";
import './AboutCard.css';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const AboutCard=()=>{
    return(
        <>
        {/* <div className="container login-img">
            <div className="img m- p-2">
            <div className="heading my-2">
                <h1>Start your journey with FoodApp</h1>
            </div>
            <div className="title my-5">
                <p>Create your restaurant page and register for online ordering</p>
            </div>
            <div className="button my-5">
                <Link to="/registerrestaurant" className="registeruser bg-blue-400 px-3 text-black font-bold py-2 rounded-lg hover:text-white">Start Now <ArrowForwardIosRoundedIcon/></Link>
            </div>
            </div>
        </div> */}


<div className="w-screen h-screen bg-white flex flex-row flex-wrap p-3">
  <div className="mx-auto w-2/3">
{/* <!-- Profile Card --> */}
<div className="rounded-lg about shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
  <div className="md:w-2/3 w-full my-4">
  <div className="text-2xl text-white leading-tight my-5">Start your journey with FoodApp</div>
      <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">Create your restaurant page and register for online ordering</span></div>
      {/* <div className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div> */}
    
  </div>
  <div className="md:w-1/3 w-full px-3 flex flex-row flex-wrap">
    <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
      {/* <div className="text-2xl text-white leading-tight">Admin User</div>
      <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">Administrator</span></div> */}
      <div className="text-sm mb-3 text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"><Link to="/registerrestaurant" className="registeruser bg-blue-400 px-3 text-black font-bold py-2 rounded-lg hover:text-white">Start Now <ArrowForwardIosRoundedIcon/></Link></div>
    </div>
  </div>
</div>
{/* <!-- End Profile Card --> */}
  </div>
</div>
        </>
    )
}

export default AboutCard;
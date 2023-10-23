import './App.css';
import UserLogin from './Components/Customer.js/UserLogin/UserLogin';
import UserRegister from './Components/Customer.js/UserRegister/UserRegister';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import RestaurantAdmin from './Components/RestraurantAdmin/AdminDashboard/RestaurantAdmin';
import RestauarntRegister from './Components/Restaurant.js/RestaurantRegister/RestaurantRegister';
import RestaurantLogin from './Components/Restaurant.js/RestaurantLogin/RestaurantLogin';
import { useState } from 'react';
import FoodCard from './Components/FoodCards/FoodCard';
import RestaurantDashboard from './Components/RestraurantAdmin/RestaurantDashboard/RestaurantDashboard';
import CreateFoodItem from './Components/RestraurantAdmin/CreateFoodItem/CreateFoodItem';
import RestaurantCards from './Components/RestraurantAdmin/RestaurantCards/RestaurantCards';


function App() {
  const [userToken, setUserToken]=useState(localStorage.getItem("user-token"));
  const[restaurantToken,setRestaurantToken]=useState(localStorage.getItem("restaurant-token"));
  console.log(restaurantToken);
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/' element={<HeroSection/>}/> */}
        <Route path='/' element={<Dashboard userToken={userToken} setUserToken={setUserToken}/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userregister' element={<UserRegister/>}/>
        <Route path='/addrestaurant' element={<RestaurantAdmin/>}/>
        <Route path='/restaurantregister' element={<RestauarntRegister/>}/>
        <Route path='restaurantlogin' element={<RestaurantLogin/>}/>
        <Route path='/foodcards' element={<FoodCard/>}/>
        <Route path='/restaurantdashboard' element={<RestaurantDashboard restaurantToken={restaurantToken} setRestaurantToken={setRestaurantToken}/>}/>
        <Route path='/createfooditem' element={<CreateFoodItem restaurantToken={restaurantToken} setRestaurantToken={setRestaurantToken} />}/>
        <Route path='/restaurantfoodcard' element={<RestaurantCards restaurantToken={restaurantToken} setRestaurantToken={setRestaurantToken} />}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;

import React from "react";
import Header from "../Header/Header";
import StaticCards from "../StaticCards/StaticCards";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Dashboard = ({userToken, setUserToken})=>{
    return(
        <>
        <Header userToken={userToken} setUserToken={setUserToken} />
        <div className="container p-3 mt-3">
        <StaticCards/>
        </div>
        <div className="container mt-3 p-4">
        <About/>
        </div>
        <div className="footer bg-black">
        <div className="container text-white mt-3 p-4">
        <Footer/>
        </div>
        </div>
        </>
    )
};

export default Dashboard;
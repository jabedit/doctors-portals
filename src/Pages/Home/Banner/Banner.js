import React from "react";
import './Banner.css'
import chair from  '../../../assets/images/chair.png'
const Banner = () => {
  return (
    <div 
    className="banner-container py-20 px-5">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img style={{height : '22rem'}}
            src={chair}
            className=" rounded-lg shadow-2xl w-full " alt=""
          />
          <div className=" mb-10 md:mb-0">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-8  ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-r from-secondary to-primary hover:from-pink-500 hover:to-yellow-500 text-white font-semibold">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

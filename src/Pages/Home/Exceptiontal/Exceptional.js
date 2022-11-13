import React from "react";
import treatment from '../../../assets/images/treatment.png'
import './Exceptional.css'

const Exceptional = () => {
  return (
    <div className="exceptional-container 10 px-2 md:px-10">
      <div className="hero min-h-screen ">
        <div className="grid md:grid-cols-2 gap-20">
            <div className="flex justify-center">
                <img
                style={{ height: "22rem" }}
                src={treatment}
                className=" rounded-lg shadow-2xl w-full "
                alt=""
          />
            </div>
        <div className="text-white">
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-8  ">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn bg-gradient-to-r from-secondary to-primary hover:from-pink-500 hover:to-yellow-500 text-white font-semibold">
              GET STARTED
            </button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Exceptional;

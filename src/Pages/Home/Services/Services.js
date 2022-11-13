import React from "react";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";

const Services = () => {
    //https://react-spring.dev/
  const services = [
    {
      id: 1,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 1,
      title: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="py-20 px-10">
      <div className="text-center mb-10">
        <h4 className="text-secondary text-2xl font-semibold">Our Services</h4>
        <h2 className="text-white text-4xl font-semibold">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service) => (
          <div key={service.id}>
            <div className=" px-8 py-8  rounded-lg text-center text-white  bg-slate-700">
              <div className="flex justify-center">
                <img className="" src={service.img} alt="" />
              </div>
              <h3 className=" text-2xl py-4 font-semibold">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Services;

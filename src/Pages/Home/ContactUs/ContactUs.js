import React from "react";

import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      
    >
      <div className=" w-11/12 md:w-5/12 mx-auto py-14">
        <div className="text-center ">
          <h4 className="text-secondary text-2xl font-semibold">Contact Us</h4>
          <h2 className="text-white text-4xl font-semibold">
            Stay connect with us
          </h2>
        </div>
        <div>
          <form>
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="type subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit">
                <PrimaryButton>Submit</PrimaryButton>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

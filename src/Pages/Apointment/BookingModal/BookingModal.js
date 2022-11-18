import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  console.log(treatment);
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate : date,
      treatment :name,
      patient: patientName,
      slot, 
      phone  ,
      email 
     };

     console.log(booking)
     setTreatment(null)
  }
  

  
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              readOnly
              className="input input-bordered w-full  mb-3"
            />
            <select 
            name='slot'
            className="select select-bordered w-full mb-3">
              {slots?.map((slot, i) => (
                <option key={i}>{slot}</option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full mb-3"
            />
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full mb-3"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-bordered w-full mb-3"
            />
            <input type="submit" className="btn w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

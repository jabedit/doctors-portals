import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { json, Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots } = treatment;
  const {user}=useContext(AuthContext)
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
     fetch(`http://localhost:5000/bookings`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)

     })
     .then(res => res.json())
     .then(data =>{
      console.log(data)
      if(data.acknowledged){
        setTreatment(null)
        toast.success('Booking Confirmed')
        refetch()
      }
      
     })
     
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
              defaultValue={user.displayName}
              className="input input-bordered w-full mb-3"
            />
            <input
              name="email"
              type="text"
              defaultValue={user.email}
              readOnly
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

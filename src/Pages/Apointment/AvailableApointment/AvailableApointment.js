
import React, { useEffect, useState } from 'react';
import {format} from 'date-fns'
import ApointmentOption from './ApointmentOption';
import BookingModal from '../BookingModal/BookingModal';


const AvailableApointment = ({selectedDate}) => {
    const [apointmentOptions, setApointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    console.log(treatment)
    useEffect(()=>{
        fetch('apointmentOption.json')
        .then(res => res.json())
        .then(data => setApointmentOptions(data))
    }, [])
    return (
        <section className='mb-10'>
            <div className=' text-center text-secondary text-2xl font-bold mb-8'>
            <h2> Avalibale Apointment on {format(selectedDate, 'PP')}</h2>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5' >
            {apointmentOptions.map(apointmentOption =>  <ApointmentOption apointmentOption={apointmentOption} setTreatment={setTreatment} />)}
            
        </div>
      
           {
            treatment && 
            <BookingModal  treatment={treatment} selectedDate={selectedDate}
            setTreatment={setTreatment}
            />
           }
        
        </section>
        
    );
};

export default AvailableApointment;
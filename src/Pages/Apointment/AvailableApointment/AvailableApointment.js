
import React, { useEffect, useState } from 'react';
import {format} from 'date-fns'
import ApointmentOption from './ApointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';


const AvailableApointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null)
 
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/apointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    
    return (
        <section className='mb-10'>
            <div className=' text-center text-secondary text-2xl font-bold mb-8'>
            <h2> Avalibale Apointment on {format(selectedDate, 'PP')}</h2>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5' >
            {appointmentOptions.map(apointmentOption =>  <ApointmentOption apointmentOption={apointmentOption} setTreatment={setTreatment} />)}
            
        </div>
      
           {
            treatment && 
            <BookingModal refetch={refetch}  treatment={treatment} selectedDate={selectedDate}
            setTreatment={setTreatment}
            />
           }
        
        </section>
        
    );
};

export default AvailableApointment;
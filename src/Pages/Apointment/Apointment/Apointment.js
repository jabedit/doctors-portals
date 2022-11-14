import React, { useState } from 'react';
import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import AvailableApointment from '../AvailableApointment/AvailableApointment';


const Apointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='px-2 md:px-10'>
            <ApointmentBanner key={selectedDate} selectedDate={selectedDate}  setSelectedDate={setSelectedDate}/>
            <AvailableApointment selectedDate={selectedDate} />
        </div>
    );
};

export default Apointment;
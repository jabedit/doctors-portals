
import React from 'react';
import {format} from 'date-fns'
const AvailableApointment = ({selectedDate}) => {
    return (
        <div className=' text-center text-secondary text-3xl font-bold'>
            <h2> Avalibale Apointment on {format(selectedDate, 'PP')}</h2>
        </div>
    );
};

export default AvailableApointment;
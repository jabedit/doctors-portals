import React from 'react';
import {MdOutlineWatchLater , MdLocationOn} from  'react-icons/md';
import {BiPhoneCall} from  'react-icons/bi';
const BannerBottom = () => {
    return (
        <div style={
            { marginTop : "-110px"}
        } className='px-10 '>
            <div className='grid sm:-m-0  md:grid-cols-3 gap-5 '>
                    <div className=' px-5 py-8 flex bg-secondary items-center bg-gradient-to-r from-secondary to-primary text-white rounded-xl'>
                        <div className='pr-5 text-7xl'><MdOutlineWatchLater /></div>
                        <div>
                            <h4 className='text-2xl font-semibold pb-3'>Opening Hour</h4>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est!</p>
                        </div>
                    </div>
                    <div className=' px-5 py-8 flex bg-accent items-center text-white rounded-xl'>
                        <div className='pr-5 text-7xl'><MdLocationOn /></div>
                        <div>
                            <h4 className='text-2xl font-semibold pb-3'>Opening Hour</h4>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est!</p>
                        </div>
                    </div>
                    <div className=' px-5 py-8 bg-gradient-to-r from-secondary to-primary flex bg-secondary items-center text-white rounded-xl'>
                        <div className='pr-5 text-7xl'><BiPhoneCall /></div>
                        <div>
                            <h4 className='text-2xl font-semibold pb-3'>Opening Hour</h4>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, est!</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default BannerBottom;
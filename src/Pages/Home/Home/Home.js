import React from 'react';
import { MdAirplaneTicket } from 'react-icons/md';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import ContactUs from '../ContactUs/ContactUs';
import Exceptional from '../Exceptiontal/Exceptional';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerBottom />
            <Services />
            <Exceptional />
            <MdAirplaneTicket />
            <MakeAppointment />
            <Testimonial />
            
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;
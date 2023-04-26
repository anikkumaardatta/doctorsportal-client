import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import ServiceBanner from '../ServiceBarner/ServiceBanner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {

    

    return (
        <section className=''>
            <Banner/>
            <InfoCards/>
            <Services/>
            <ServiceBanner/>
            <MakeAppointment/>
            <Testimonial/>
            <ContactForm/>
        </section>
    );
};

export default Home;
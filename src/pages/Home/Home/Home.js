import React from 'react';
import Appoint from '../Appoint/Appoint';
import Care from '../Care/Care';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import HeaderBottom from '../Header/HeaderBottom/HeaderBottom';
import OurBlogs from '../OurBlogs/OurBlogs';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderBottom></HeaderBottom>
            <Services></Services>
            <Care></Care>
            <Appoint></Appoint>
            <Testimonial></Testimonial>
            <OurBlogs></OurBlogs>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
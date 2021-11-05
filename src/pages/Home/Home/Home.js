import React from 'react';
import Appoint from '../Appoint/Appoint';
import Care from '../Care/Care';
import Header from '../Header/Header';
import HeaderBottom from '../Header/HeaderBottom/HeaderBottom';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderBottom></HeaderBottom>
            <Services></Services>
            <Care></Care>
            <Appoint></Appoint>
        </div>
    );
};

export default Home;
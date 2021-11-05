import React from 'react';
import Header from '../Header/Header';
import HeaderBottom from '../Header/HeaderBottom/HeaderBottom';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderBottom></HeaderBottom>
            <Services></Services>
        </div>
    );
};

export default Home;
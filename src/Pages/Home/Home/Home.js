import React from 'react';
import About from '../About/About';

import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Business from '../Business/Business';
import CompanyNews from '../CompanyNews/CompanyNews';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
            <Reviews></Reviews>
            <About></About>
            <CompanyNews></CompanyNews>
            <Brands></Brands>
        </div>
    );
};

export default Home;
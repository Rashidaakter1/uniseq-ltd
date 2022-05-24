import React from 'react';
import About from '../About/About';

import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;
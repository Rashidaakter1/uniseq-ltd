import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
            <Footer></Footer>

        </div>
    );
};

export default Home;
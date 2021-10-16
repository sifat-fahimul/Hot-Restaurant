import React from 'react';
import About from './About/About';
import Banner from './Bnner/Banner';
import FoodRoute from './Foods/FoodRoute/FoodRoute';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodRoute></FoodRoute>
            <About></About>
        </div>
    );
};

export default Home;
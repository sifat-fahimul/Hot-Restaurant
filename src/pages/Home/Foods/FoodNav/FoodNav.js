import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodNav.css'
const FoodNav = () => {

    const selected = {
        fontWeight: 'bold',
        color: 'red',
        borderBottom: '3px solid red'
    }

    return (
        <div className="foodNav my-5 text-center">
            <NavLink to="/breakfast" activeStyle={selected}>Breakfast</NavLink>
            <NavLink to="/lunch#lunch" activeStyle={selected}>Lunch</NavLink>
            <NavLink to="/dinner#dinner" activeStyle={selected}>Dinner</NavLink>
        </div>
    );
};

export default FoodNav;
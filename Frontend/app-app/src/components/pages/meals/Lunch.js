import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css'
import LunchCards from '../../LunchCards';
import LuSearch from '../LuSearch';

function Lunch() {
    return (
        <>
        <Navbar/>
        <LuSearch/>
        <LunchCards/>
        </>
    )
}

export default Lunch

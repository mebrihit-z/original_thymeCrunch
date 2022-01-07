import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css';
import DinnerCards from '../../DinnerCards';
import DeSearch from '../DeSearch';
function Dinner() {
    return (
        <>
        <Navbar/>
        <DeSearch/>
        <DinnerCards/>
        </>
    )
}

export default Dinner

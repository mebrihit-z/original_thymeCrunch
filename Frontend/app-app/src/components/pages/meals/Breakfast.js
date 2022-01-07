import React from 'react'
import Navbar from '../../Navbar'
import '../../../App.css'
import BreakfastCards from '../../BreakfastCards';
import DerSearch from '../DerSearch';
function Breakfast() {
    return (
        <>
        <Navbar/>
        <DerSearch/>
        <BreakfastCards/>
        </>
    )
}

export default Breakfast

import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css'
import DessertsCards from '../../DessertsCards';
import DeesSearch from '../DeesSearch';
function Desserts() {
    return (
        <>
        <Navbar/>
        <DeesSearch/>
        <DessertsCards/>
        </>
    )
}

export default Desserts

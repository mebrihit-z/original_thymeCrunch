import React from 'react'
import Navbar from '../../Navbar'
import '../../../App.css'
import SnacksCards from '../../SnacksCards';
import SnSearch from '../SnSearch';
function Snacks() {
    return (
        <>
        <Navbar/>
        <SnSearch/>
        <SnacksCards/>
        </>
    )
}

export default Snacks

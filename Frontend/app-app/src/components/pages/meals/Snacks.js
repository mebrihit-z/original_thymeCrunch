import React from 'react'
import Navbar from '../../Navbar'
import '../../../App.css'
import SnacksCards from '../../SnacksCards';
import SnSearch from '../SnSearch';
import { RecipeButton } from '../../RecipeButton';
function Snacks() {
    return (
        <>
        <Navbar/>
        <SnSearch/>
        <SnacksCards/>
        <RecipeButton/>
        </>
    )
}

export default Snacks

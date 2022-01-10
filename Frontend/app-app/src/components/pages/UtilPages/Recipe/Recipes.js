import React from 'react'
import Navbar from '../../../Navbar';
import Cards from '../../../cards/Cards';
import Search from '../../UtilPages/Search/Search';
import '../../../../App.css';

import './Recipes.css';

function Recipes() {
    return (
       <>
       <div className='recipDiv'>
            <Navbar/>
            <Search/>
            <Cards/>
        </div>
       </>
    )
}

export default Recipes

import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import './Search.css';
export default function Search() {
    

    return (
         <>
         <h1 id="h1">Recipes</h1>
            <div className='ui_search'>
                <div className='ui_icon_input'>
                        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                        <i class="fas fa-search"></i>
                        <input  type="text" placeholder='Search a Recipe' className='prompt'/>
                </div>
            </div> 
         </>
            
     )
  
}

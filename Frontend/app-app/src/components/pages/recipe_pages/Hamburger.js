import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { HamburgerIng } from '../RecApiCalls/HamburgerApi';

function Hamburger (){
    return(
    <>
    <Navbar/>
    <HamburgerIng/>
    </>
    )
        

    
}
export default Hamburger;

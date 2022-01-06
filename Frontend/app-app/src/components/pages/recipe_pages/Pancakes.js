import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {PancakesIng} from '../RecApiCalls/PancakesApi';


function Pancakes (){
    return(
    <>
    <Navbar/>

    <PancakesIng/>
    </>
    )
        

   
}
export default Pancakes;

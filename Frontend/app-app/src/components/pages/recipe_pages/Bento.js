import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { BentoIng } from '../RecApiCalls/BentoApi';

function Bento (){

    return(

    <>
    <Navbar/>
    <BentoIng/>
    </>
    )
        

    
}export default Bento;

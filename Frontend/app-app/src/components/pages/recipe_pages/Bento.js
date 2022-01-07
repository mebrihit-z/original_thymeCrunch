import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { BentoIng } from '../RecApiCalls/BentoApi';

function Bento (){

    return(

    <>
    <Navbar/>
    <img src="images/katsu.jpg"/>
    <BentoIng/>
    </>
    )
        

    
}
export default Bento;

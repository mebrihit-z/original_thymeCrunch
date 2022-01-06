import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { OrangeJuiceIng } from '../RecApiCalls/OjApi';

function OrangeJuice (){
    return(
    <>
    <Navbar/>
    <OrangeJuiceIng/>
    </>
    )
        

    
}
export default OrangeJuice;

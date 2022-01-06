import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {BobaIng}from '../RecApiCalls/BobaApi';

function BobaTea (){
    return(
    <>
    <Navbar/>
    <BobaIng/>
    </>
    )
        

    
}export default BobaTea;

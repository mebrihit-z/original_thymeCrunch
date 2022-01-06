import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';

function CeleryBoat (){
    return(
    <>
    <Navbar/>
    <CeleryIng/>
    </>
    )
        

   
} export default CeleryBoat;

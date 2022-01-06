import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import  { ToastIng } from '../RecApiCalls/ToastApi';

function Toast (){
    return(
    <>
    <Navbar/>

    <ToastIng/>
    <ButtonVideo/>
    </>
    )
        

    
}
export default Toast;

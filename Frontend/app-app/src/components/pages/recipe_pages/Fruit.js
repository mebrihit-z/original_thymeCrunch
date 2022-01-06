import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { FruitIng } from '../RecApiCalls/FruitApi';

function Fruit (){
    return(
    <>
    <Navbar/>
    <FruitIng/> 
    </>
    )
    
}
export default Fruit;

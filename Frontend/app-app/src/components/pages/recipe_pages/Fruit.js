import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'

function Fruit (){
    <>
    <Navbar/>
    <FruitApi/> 
    </>
    
}export default Fruit;

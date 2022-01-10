import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { SaladIng } from '../RecApiCalls/SaladApi';
import { RecipeButton } from "../../RecipeButton";
//import salad from './images/car.jpg';



function Salad (){
    return(
    <>
    <Navbar/>
    {/* <img src="images/salad.jpg"/> */}
    <img src="images/salad6.jpg"alt="salad" className="salad"/>
    <SaladIng/>
    <RecipeButton/>
    </>
    )
        

}
export default Salad;

import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { BentoIng } from '../RecApiCalls/BentoApi';
import { RecipeButton } from "../../RecipeButton";

function Bento (){

    return(

    <>
    <Navbar/>
    {/* <img src="images/katsu.jpg"/> */}
    {/* <img src="/images"/> */}
    <BentoIng/>
    </>
    )
        

    
}
export default Bento;

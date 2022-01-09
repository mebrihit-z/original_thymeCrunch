import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { BentoIng } from '../RecApiCalls/BentoApi';
import { RecipeButton } from "../../buttons/RecipeButton";

function Bento (){

    return(

    <>
    <Navbar/>
    {/* <img src="images/katsu.jpg"/> */}
    {/* <img src="/images"/> */}
    <BentoIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Bento;

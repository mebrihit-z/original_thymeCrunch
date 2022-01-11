import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { BentoIng } from '../RecApiCalls/BentoApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Bento (){

    return(

    <>
    <Navbar/>
    {/* <img src="images/katsu.jpg"/> */}
    {/* <img src="/images"/> */}
    <BentoIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}
export default Bento;

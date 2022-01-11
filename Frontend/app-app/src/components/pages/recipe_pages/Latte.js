import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { LatteIng } from '../RecApiCalls/LatteApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Latte (){
    return(
    <>
    <Navbar/>
    <img src="images/latte.jpg"/>
    <LatteIng/>
    <RecipeButton/>
    <EmailButton/>
    </> 
    )

   
}

export default Latte;

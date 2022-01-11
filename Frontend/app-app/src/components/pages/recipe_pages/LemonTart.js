import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { LemonTartIng } from '../RecApiCalls/LemonTartApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function LemonTart (){
    return(
    <>
    <Navbar/>
    <img src="images/lemon_tart.jpg"/>

    <LemonTartIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )

   
}
export default LemonTart;

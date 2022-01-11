import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { PastaIng } from '../RecApiCalls/PastaApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Pasta (){
    return(
    <>
    <Navbar/>
    <img src="images/pasta.jpg"/>
    <PastaIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

   
}export default Pasta;

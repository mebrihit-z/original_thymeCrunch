import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { HummusIng } from '../RecApiCalls/HummusApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Hummus (){
    return(
    <>
    <Navbar/>
    <img src="images/hummus.jpg"/>
    <HummusIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}
export default Hummus;

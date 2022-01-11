import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { PunchIng } from '../RecApiCalls/PunchApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Punch (){
    return(
    <>
    <Navbar/>
    <img src="images/punch.jpg"/>
    <PunchIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

   
}
export default Punch;

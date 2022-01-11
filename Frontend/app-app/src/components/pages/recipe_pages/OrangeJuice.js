import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { OrangeJuiceIng } from '../RecApiCalls/OrangeJuiceApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function OrangeJuice (){
    return(
    <>
    <Navbar/>
    <img src="images/orange_juice.jpg"/>
    <OrangeJuiceIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}
export default OrangeJuice;

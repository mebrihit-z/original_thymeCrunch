import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { HamburgerIng } from '../RecApiCalls/HamburgerApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Hamburger (){
    return(
    <>
    <Navbar/>
    <img src="images/hamburger.jpg"/>
    <HamburgerIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}
export default Hamburger;

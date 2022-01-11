import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {GranolaIng} from '../RecApiCalls/GranolaApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Granola (){
    return(
    <>
    <Navbar/>
    <img src="images/granola.jpg"/>
    <GranolaIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}
export default Granola;

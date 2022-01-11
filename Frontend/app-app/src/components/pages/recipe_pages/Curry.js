import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {CurryIng} from '../RecApiCalls/CurryApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Curry (){
    return(
    <>
    <Navbar/>
    <img src="images/curry.jpg"/>
     <CurryIng/> 
     <RecipeButton/> 
     <EmailButton/>
    </>
    )
    
}export default Curry;

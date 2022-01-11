import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {BobaIng}from '../RecApiCalls/BobaApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function BobaTea (){
    return(
    <>
    <Navbar/>
    <img src="images/row_boba.jpg"/>
    <BobaIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}export default BobaTea;

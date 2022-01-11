import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { PavlovaIng } from '../RecApiCalls/PavolvaApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Pavlova (){
    return(
    <>
    <Navbar/>
    <img src="images/pavlova.jpg"/>

    <PavlovaIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}export default Pavlova;

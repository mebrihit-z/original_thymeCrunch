import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { LatteIng } from '../RecApiCalls/LatteApi';
import { RecipeButton } from "../../buttons/RecipeButton";

function Latte (){
    return(
    <>
    <Navbar/>
    <img src="images/latte.jpg"/>
    <LatteIng/>
    <RecipeButton/>
    </> 
    )

   
}

export default Latte;

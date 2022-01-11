import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {PancakesIng} from '../RecApiCalls/PancakesApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Pancakes (){
    return(
    <>
    <Navbar/>
    <img src="images/pancakes.jpg"/>
    <PancakesIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

   
}
export default Pancakes;

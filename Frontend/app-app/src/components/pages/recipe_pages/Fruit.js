import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { FruitIng } from '../RecApiCalls/FruitApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Fruit (){
    return(
    <>
    <Navbar/>
    <img src="images/fruit.jpg"/>

    <FruitIng/> 
    <RecipeButton/>
    <EmailButton/>
    </>
    )
    
}
export default Fruit;

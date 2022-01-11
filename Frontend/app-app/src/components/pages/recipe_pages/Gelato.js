import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { GelatoIng } from '../RecApiCalls/GelatoApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Gelato (){
    return(
    <>
    <Navbar/>
    <img src="images/gelato.jpg"/>
    <GelatoIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

    
}
export default Gelato;

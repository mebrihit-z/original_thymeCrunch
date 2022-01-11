import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { PadThaiIng } from '../RecApiCalls/PadThaiApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function PadThai(){
    return(
    <>
    <Navbar/>
    <img src="images/pad_thai.jpg"/>
    <PadThaiIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

}
export default PadThai;

import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";


function CeleryBoat (){
    return(
    <>
    
    <Navbar/>
    <img src="images/celery_boats.jpg"/>
    <CeleryIng/>
    <RecipeButton/>
    <EmailButton/>
    </>
    )
        

   
} export default CeleryBoat;

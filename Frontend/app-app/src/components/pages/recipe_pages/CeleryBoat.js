import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';
import { RecipeButton } from "../../buttons/RecipeButton";

function CeleryBoat (){
    return(
    <>
    
    <Navbar/>
    <img src="images/celery_boats.jpg"/>
    <CeleryIng/>
    <RecipeButton/>
    </>
    )
        

   
} export default CeleryBoat;

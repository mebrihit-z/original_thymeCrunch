import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {CurryIng} from '../RecApiCalls/CurryApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import '../../pages/UtilPages/Recipe/UserRecipes.css'

function Curry (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/curry.jpg"/>
    
    <h1>Yellow Curry</h1>
    <div id="userdiv">
    <p>Take-out has nothing on this quick and easy dinner. Spice up supper with our lucious and sunny yellow curry!</p>
    <hr/>
    </div>
     <CurryIng/> 
     <br/>
     <RecipeButton/>  
     <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
     </div>
    </>
    )
    
}export default Curry;

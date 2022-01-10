import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { SaladIng } from '../RecApiCalls/SaladApi';
import { RecipeButton } from "../../buttons/RecipeButton";

function Salad (){
    return(
    <>
    <Navbar/>
    {/* <img src="images/salad.jpg"/> */}
    <img src="images/salad6.jpg"alt="salad" className="salad"/>
    <SaladIng/>
    <RecipeButton/>
    </>
    )
        

}
export default Salad;
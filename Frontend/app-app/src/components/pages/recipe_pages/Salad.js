import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { SaladIng } from '../RecApiCalls/SaladApi';
<<<<<<< HEAD
import { RecipeButton } from "../../RecipeButton";
//import salad from './images/car.jpg';


=======
import { RecipeButton } from "../../buttons/RecipeButton";
>>>>>>> 44f096c7249a9cf5b6fa4cfc19918fa53cdba0cf

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

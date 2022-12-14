import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { FruitIng } from '../RecApiCalls/FruitApi';
import { SnackButton } from "../../buttons/SnackButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";

function Fruit (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/fruit.jpg"/>
    
    <h1>Fresh Fruit Stars</h1>
    <div id="userdiv">
    <p>Sweet and cute fruit stars have all the goodness of fruits with all the fun of shapes!</p>
    <hr/>
    </div>
    <FruitIng/> 
    <SnackButton/>
    <EmailButton/>
    <ShoppingListButton/>
    <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    </div>
    </>
    )
    
}
export default Fruit;

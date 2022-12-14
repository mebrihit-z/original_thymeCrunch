import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { HummusIng } from '../RecApiCalls/HummusApi';
import { SnackButton } from "../../buttons/SnackButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";

function Hummus (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    
    <img src="images/hummus.jpg"/>
    <h1>Hungry for Hummus</h1>
    <div id="userdiv">
    <p>Rich tahini and warm spices blend with creamy chickpeas for a deceptively healthy and outrageously delicious dip!</p>
    <hr/>
    </div>
    <HummusIng/>
    <SnackButton/>
    <EmailButton/>
    <ShoppingListButton/>
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
        

    
}
export default Hummus;

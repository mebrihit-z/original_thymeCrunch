import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { LemonTartIng } from '../RecApiCalls/LemonTartApi';
import { DessertButton } from "../../buttons/DessertButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";

function LemonTart (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">

    <img src="images/lemon_tart.jpg"/>
    
    <h1>Lovely Lemon Tart</h1>
    <div id="userdiv">
    <p>Who says you can't have sweet and tart? This little pastry is sure to wow at teaparties...or it could be just for you.</p>
    <hr/>
    </div>
    <LemonTartIng/>
    <DessertButton/>
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
export default LemonTart;

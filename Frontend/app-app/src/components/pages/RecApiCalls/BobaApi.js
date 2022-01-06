import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'

export const BobaIng = ()=> {

   

    const [bobaIng, setBobaIng] = useState([]);

    const fetchBobaIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/beverages/boba-tea").then(res =>{
            console.log(res);
            setCurryIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchBobaIng();
    }, [] );

    return bobaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
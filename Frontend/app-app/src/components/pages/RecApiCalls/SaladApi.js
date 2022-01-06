import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'


export const SaladIng = ()=> {

   

    const [saladIng, setSaladIng] = useState([]);

    const fetchSaladIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/lunch/salad").then(res =>{
            console.log(res);
            setSaladIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchSaladIng();
    }, [] );

    return saladIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'


export const PadThaiIng = ()=> {

   

    const [padThaiIng, setPadThaiIng] = useState([]);

    const fetchPadThaiIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/dinner/pad-thai").then(res =>{
            console.log(res);
            setPadThaiIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPadThaiIng();
    }, [] );

    return padThaiIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
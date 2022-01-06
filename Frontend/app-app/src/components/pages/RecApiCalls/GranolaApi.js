import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'

export const GranolaIng = ()=> {

   

    const [granolaIng, setGranolaIng] = useState([]);

    const fetchGranolaIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/breakfast/granola").then(res =>{
            console.log(res);
            setGranolaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchGranolaIng();
    }, [] );

    return granolaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
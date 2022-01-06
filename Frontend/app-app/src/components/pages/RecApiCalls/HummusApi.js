import axios from "axios";
import React, {useState, useEffect, useCallback}from "react";
import Navbar from "../Navbar";
import '../UserProfiles.css';

export const HummusIng = ()=> {

   

    const [hummusIng, setHummusIng] = useState([]);

    const fetchHummusIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/snacks/hummus").then(res =>{
            console.log(res);
            setHummusIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchHummusIng();
    }, [] );

    return hummusIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
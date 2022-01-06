import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'

export const CurryIng = ()=> {

   

    const [curryIng, setCurryIng] = useState([]);

    const fetchCurryIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/lunch/curry").then(res =>{
            console.log(res);
            setCurryIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchCurryIng();
    }, [] );

    return curryIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
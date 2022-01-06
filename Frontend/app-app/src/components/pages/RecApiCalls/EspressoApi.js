import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../Navbar";
import '../UserProfiles.css'

export const EspressoIng = ()=> {

   

    const [espressoIng, setEspressoIng] = useState([]);

    const fetchEspressoIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/beverages/espresso").then(res =>{
            console.log(res);
            setEspressoIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchEspressoIng();
    }, [] );

    return espressoIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
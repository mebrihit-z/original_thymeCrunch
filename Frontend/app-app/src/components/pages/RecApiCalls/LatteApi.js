import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';

export const LatteIng = ()=> {

   

    const [latteIng, setLatteIng] = useState([]);

    const fetchLatteIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/beverages/espresso").then(res =>{
            console.log(res);
            setLatteIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchLatteIng();
    }, [] );

    return LatteIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
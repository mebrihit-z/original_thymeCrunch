import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';

export const PastaIng = ()=> {

   

    const [pastaIng, setPastaIng] = useState([]);

    const fetchPastaIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/dinner/pasta").then(res =>{
            console.log(res);
            setPastaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPastaIng();
    }, [] );

    return pastaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
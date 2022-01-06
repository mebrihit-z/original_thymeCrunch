import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';

export const PancakesIng = ()=> {

   

    const [pancakesIng, setPancakesIng] = useState([]);

    const fetchPancakesIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/breakfast/pancakes").then(res =>{
            console.log(res);
            setPancakesIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPancakesIng();
    }, [] );

    return pancakesIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
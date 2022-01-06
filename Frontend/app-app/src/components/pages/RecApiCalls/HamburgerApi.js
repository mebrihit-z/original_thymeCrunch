import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';

export const HamburgerIng = ()=> {

   

    const [hamburgerIng, setHamburgerIng] = useState([]);

    const fetchCurryIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/dinner/hamburger").then(res =>{
            console.log(res);
            setHamburgerIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchHamburgerIng();
    }, [] );

    return hamburgerIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
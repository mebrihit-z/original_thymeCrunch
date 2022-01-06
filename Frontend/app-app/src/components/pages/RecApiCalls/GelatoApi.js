

export const GelatoIng = ()=> {

   
    import axios from "axios";
    import React, {useState, useEffect, useCallback}from "react"
    import Navbar from "../Navbar";
    import '../UserProfiles.css'

    
    const [gelatoIng, setGelatoIng] = useState([]);

    const fetchGelatoIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/desserts/gelato").then(res =>{
            console.log(res);
            setGelatoIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchGelatoIng();
    }, [] );

    return gelatoIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
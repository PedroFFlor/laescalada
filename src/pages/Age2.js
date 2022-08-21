import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import TestRouter from '../components/TestRouter'

const Age2 = () => {

    const [civilizations, setCivilizations] = useState([])

    useEffect(() => {   
        callApi();                 
    }, [] )         

    const callApi = async () => {          
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations') 
        const infoAge = await data.json() 
        setCivilizations(infoAge.civilizations);
    }

    return(
        <>
            <TestRouter />
            <hr />
            <h1>que hacemos con el age</h1>
            <ul>
                {
                    civilizations.map(city =>(
                        <li key={city.id}>
                            <Link to={`/age2/civilization/${city.id}`}>Civilizacion: {city.name}</Link> - Expancion: {city.expansion}
                        </li>
                    ))
                }  
            </ul>
        </>
    )
}
export default Age2

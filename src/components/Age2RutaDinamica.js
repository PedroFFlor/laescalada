import React, { Fragment, useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import TestRouter from '../components/TestRouter'

const Age2RutaDinamica = () => {

    const {id} = useParams()

    const [pueblo, setPueblo] = useState([])

    useEffect(() => {  
        const callApi = async () => {          
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const infoAge = await data.json()
            setPueblo(infoAge)
        } 
        callApi();            
    }, [id] )    //si saco este id, y dejo el array vacio no pasa nada, pero deberia dar advertencia, entonces ponemos el id para que el seguimiento se haga dentro de ese id  

    

    return(
        <Fragment>
            <TestRouter />
            <h3>{pueblo.name}</h3>
        </Fragment>
    )
} 
export default Age2RutaDinamica
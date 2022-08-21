import React, {useEffect, useState} from "react";
import TestRouter from '../components/TestRouter'

const Link = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {   //se puede meteter todo en el mismo useEffect, aca se hizo asi para explicar mejor
        //console.log('useEffect');
        obtenerDatos();                 //llamamos en el useEffect al API asi lo hace 1 sola vez
    }, [] )         //los corchetes van por que sino queda cargando unfinitamente el useEfect, con estos se ejectura 1 sola vez

    const obtenerDatos = async () => {          //llamamos a un api
        const data = await fetch('https://jsonplaceholder.typicode.com/users') //guardamos en data, un llamado a una API
        const users = await data.json() //agarramos lo que trae el API, lo pasamos a json y lo guardamos en users
        //console.log(users); 
        setDatos(users); // de forma dinamica metemos los datos del API en la variable de estado
    }



    return(
        <>
            <TestRouter />
            <hr />
            <h1>Aca vamos a probar el use efect</h1>
            <p>Se usa para cargar una funcion DESPUES de que se renderizo el componente, puede llamar a un api</p>
            <ul>
                {
                    datos.map(user => (
                        <li key={user.id} >Nombre: {user.name} - Tel: {user.phone}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default Link

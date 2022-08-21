import React from "react";
 
const UserTable = (props) => {
     
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {   //aca hacemos un IF EN LINEA y si hay usuarios ITERAMOS el resultado
                    props.users.length > 0 ? (
                        props.users.map(user =>(    //aca tira error por la key, por eso agregamos como key el user.id
                            <tr key={user.id}>      
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button 
                                        className="button muted-button"
                                        onClick={() => props.editRow(user)} //el usuario que pasamos es un objeto con id, name y username
                                        >Edit
                                    </button>
                                    <button 
                                        className="button muted-button"
                                        onClick={() => props.deleteUser(user.id)} //si aca pasamos {delteUser} se ejecuta sola cuando carga el formulario,
                                        >Delete                                 {/* por eso se hace una funcion flecha, para evitar que se genere un click cuando carga la pagina*/ }
                                    </button>                                   {/* y el user.id es el ID que enviamos y lo sacamos de la iteracion del map*/}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>No Users</td>
                        </tr>
                    )
                } 
            </tbody>
        </table>
    )
}
export default UserTable;


import React, { Fragment, useState } from "react";
import AddUserForm from "./AddUserForm";
import UserTable from "./UserTable";
import {v4 as uuidv4} from "uuid";  //uuid es una libreria para generar id aleatorios
import EditUserForm from "./EditUserForm";



const TestCrudPadre = ()  => {   
  
  const usersData = [     //es un arreglo de objetos que va a ser puedo como "default" para inicializar
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },  //utilizamos libreria para id aleatorios
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData); //inicializamos users con el default de arriba
  const [editing, setEditing] = useState(false); //iniciamos un estado para poder preguntar si estamos editando y asi mostrar el formulario correcto
  const [currentUser, setCurrentUser] = useState({  //iniciamos un estado vacio para el usuario a editar
    id:null, name:'', username:''
  });

  const addUser = (user) => {   //cuando agregamos usuario
    user.id = uuidv4();         //asignamos id aleatorio
    setUsers([             //agregamos a users
      ...users,           //hacemos una copia de los usuarios
      user                //y agregamos un usuario, que viene por props
    ])
  }

  const deleteUser = (id) => {  //se puede hacer todo en 1 linea, pero lo hago asi para entenderlo mejor("const deleteUser = (id) => setUsers(users.filter(user => user.id !== id ))")
    const arrayFiltrado = users.filter(user => user.id !== id ); //filtramos los ID que no coincidan con el que pasamos (porq ue estamos eliminando)
    setUsers(arrayFiltrado);    // y actualizamos el estado de users, NO USAMOS lA COPIA (...users) POR QUE ESTAMOS ELIMINANDO, NO AGREGANDO
  }
 
  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    });
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user =>( user.id == id ? updateUser : user)))
  }

  return (    //https://bluuweb.github.io/react/crud-hooks/#configuraciones-iniciales y https://www.youtube.com/watch?v=8rLs-AGn4go&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=9
    <Fragment>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
          {
            editing  ? (      //uso el fragment, pero el consepto es que vuelva todo en un elemento, como el componente
              <Fragment>
                <h2>Edit user</h2>
                <EditUserForm 
                currentUser={currentUser}
                updateUser={updateUser}
              />
              </Fragment>)
              :(<Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </Fragment>
            )
          }
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable 
              users={users} 
              deleteUser={deleteUser} 
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default TestCrudPadre;

import React, {Fragment} from "react";
import { useForm} from "react-hook-form";



const AddUserForm = (props) => {

  const { register, handleSubmit,  formState: { errors } } = useForm(); //es de la libreria react-hook-form para validaciones de formularios

  const onSubmit = (data, e) =>{  //el parametro data es el usuario que se cargo en el formulario
    props.addUser(data);    //aca agarramos esa data y la agregamos a users con "addUser" que se la pasamos como parametro del padre al hijo
    e.target.reset();       //limpiamos formulario
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text" 
          name="name"
          {...register("name",{
            required: {value: true, message: 'Campo requerido'}
          })}  
        />
        <div>{errors?.name?.message}</div>
        <label>Username</label>
        <input 
          type="text" 
          name="username"
          {...register("username",{
            required: {value: true, message: 'Campo requerido'}
          })}  
        />
        <div>{errors?.username?.message}</div>
        <button>Add new user</button>
      </form>
    </Fragment>
  );
}

export default AddUserForm;
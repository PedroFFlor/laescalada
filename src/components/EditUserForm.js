import React, {Fragment} from "react";
import { useForm} from "react-hook-form";



const EditUserForm = (props) => {

  const { register, handleSubmit, setValue,  formState: { errors } } = useForm({defaultValues: props.currentUser}); //el defaultValues viene dentro de react-hook-form
                                                                                                        // toma el valor de los campos del formulario
  setValue('name', props.currentUser.name);     //para usar setValue, agregarlo a la destructuracion de react-hook-form
  setValue('username', props.currentUser.username);
  const onSubmit = (data, e) =>{  //el parametro data es el usuario que se cargo en el formulario
    props.updateUser(props.currentUser.id, data) //lo recibimos por parametros
    e.target.reset();
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
        <button>Edit User</button>
      </form>
    </Fragment>
  );
}

export default EditUserForm;
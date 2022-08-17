import React, { Fragment } from "react";

const Mostrar = (props) => {

  return (
    <Fragment>
      <p>El contador de { props.children } es: { props.contador }</p>   
    </Fragment>
  );
}
export default Mostrar;

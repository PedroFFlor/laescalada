import React, { Fragment } from "react";

const Mostrar = ({contador, children}) => {

  return (
    <Fragment>
      <p>El contador de { children } es: { contador }</p>   
    </Fragment>
  );
}
export default Mostrar;

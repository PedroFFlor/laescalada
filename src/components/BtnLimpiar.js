import React, { Fragment } from "react";

const BtnLimpiar = ({limpiar}) => {

  return (
    <Fragment>
      <button onClick={ limpiar }>Reiniciar</button><br />
    </Fragment>
  );
}
export default BtnLimpiar;

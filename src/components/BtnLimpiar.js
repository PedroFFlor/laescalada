import React, { Fragment } from "react";

const BtnLimpiar = (props) => {

  return (
    <Fragment>
      <button onClick={ props.limpiar }>Reiniciar</button><br />
    </Fragment>
  );
}
export default BtnLimpiar;

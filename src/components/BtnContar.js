import React, { Fragment } from "react";

const BtnContar = ({contar})  => { //estamos desestructurando el objeto props para que sea mas legible el codigo
  
  return (
    <Fragment>
      <button onClick={ contar }>Contar</button><br />
    </Fragment>
  );
}
export default BtnContar;

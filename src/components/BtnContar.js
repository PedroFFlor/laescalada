import React, { Fragment } from "react";


const BtnContar = (props)  => {

  console.log(props)
  return (
    <Fragment>

      <button onClick={ props.contar }>Contar</button><br />

    </Fragment>
  );
}
export default BtnContar;

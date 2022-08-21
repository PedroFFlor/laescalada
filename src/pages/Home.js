import React, { Fragment, useState } from "react";
import BtnLimpiar from "../components/BtnLimpiar";
import BtnContar from "../components/BtnContar";
import Mostrar from "../components/Mostrar";
import TestCrudPadre from "../components/TestCrudPadre";
import TestRouter from "../components/TestRouter";

const useContador = (valorInicial = 0) =>{      //el "use"Contador es para indicar a react que es un hook, ponemos que por default inicie en 0
                                                        //hacemos esta funcion para no repetir la logica del contador y las funciones
  const [contador, setContador] = useState(valorInicial);     //el valor inicial lo trae del parametro que pasamos al iniciar la constante  

  const contar = () => {
    setContador(contador + 1)
  }
  
  const limpiar = () => setContador(0)

  return {      //devolvemos un objeto con 2 funciones y una variable
    contador,
    contar,
    limpiar
  }
}

export default function Home() {

  const contKeki = useContador(20);
  const contMari = useContador(50);
  
  return (
    <Fragment>
      <BtnContar contar={contKeki.contar}>
        Keki
      </BtnContar><br />
      <BtnLimpiar limpiar={contKeki.limpiar}>
        Keki
      </BtnLimpiar><br />
      <Mostrar contador={contKeki.contador}>
        Keki
      </Mostrar><br />
      <BtnContar contar={contMari.contar}>
        Mari
      </BtnContar><br />
      <BtnLimpiar limpiar={contMari.limpiar}>
        Mari
      </BtnLimpiar><br />
      <Mostrar contador={contMari.contador}>
        Mari
      </Mostrar><br />
      <hr />
      <hr />
      <TestCrudPadre />
      <hr />
      <hr />
      <TestRouter />
    </Fragment>
  );
} 


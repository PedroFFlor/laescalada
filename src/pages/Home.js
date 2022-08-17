import React, { Fragment, useState } from "react";
import BtnLimpiar from "../components/BtnLimpiar";
import BtnContar from "../components/BtnContar";
import Mostrar from "../components/Mostrar";


const useContador = () =>{      //el "use"Contador es para indicar a react que es un hook, 
                                                        //hacemos esta funcion para no repetir la logica del contador y las funciones
  const [contador, setContador] = useState(0);       

  const contar = () => {
    setContador(contador + 2)
  }
  
  const limpiar = () => setContador(0)

  return {      //devolvemos un objeto con 2 funciones y una variable
    contador,
    contar,
    limpiar
  }
}

export default function Home() {

  const contKeki = useContador();
  const contMari = useContador();
  
  return (
    <Fragment>
      <BtnContar contar={contKeki.contar} contador={contKeki.contador}>
        Keki
      </BtnContar><br />
      <BtnLimpiar limpiar={contKeki.limpiar}>
        Keki
      </BtnLimpiar><br />
      <Mostrar contador={contKeki.contador}>
        Keki
      </Mostrar><br />
      <BtnContar contar={contMari.contar} contador={contMari.contador}>
        Mari
      </BtnContar><br />
      <BtnLimpiar limpiar={contMari.limpiar}>
        Mari
      </BtnLimpiar><br />
      <Mostrar contador={contMari.contador}>
        Mari
      </Mostrar><br />
    </Fragment>
  );
} 


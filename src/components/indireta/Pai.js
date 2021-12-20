import React, { useState } from 'react';
import { Text } from 'react-native';
import Filho from './Filho';

function Pai() {
  const [num, setNum] = useState(0);
  function exibirValor(numero) {
    setNum(numero);
  }
  return (
    <>
      <Text>{num}</Text>
      <Filho funcao={exibirValor} min={1} max={60} />
    </>
  );
}
export default Pai;

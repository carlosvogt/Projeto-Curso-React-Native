import React, { useState } from 'react';
import { Button, Text } from 'react-native';

function Contador({ inicial = 0, passo = 1 }) {
  const [numero, setNumero] = useState(inicial);
  return (
    <>
      <Text>{numero}</Text>
      <Button title="+" onPress={() => setNumero(numero + passo)} />
      <Button title="-" onPress={() => setNumero(numero - passo)} />
    </>
  );
}
export default Contador;

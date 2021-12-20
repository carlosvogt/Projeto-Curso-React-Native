import React from 'react';
import { Button } from 'react-native';

function Filho({ min, max, funcao }) {
  function gerarNumero() {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <>
      <Button
        title="executar"
        onPress={() => {
          const n = gerarNumero();
          funcao(n);
        }}
      />
    </>
  );
}
export default Filho;

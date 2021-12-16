import React from 'react';
import { Button } from 'react-native';

const botao = function botao() {
  // chamar a function com () serve apenas se
  // ela tiver retorno, senão passamos apenas o nome
  // Podemos criar uma function ou usar a arrow function
  /*
  function executar() {
    console.warn('Executado');
  }
  */
  // return <Button title="Executar warn" onPress={executar} />;
  return (
    <Button title="Executar warn" onPress={() => console.warn('Executado')} />
  );
};

export default botao;

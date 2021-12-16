import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

const Primeiro = function inicial() {
  return <Text style={estilo.txtGrande}>Primeiro componente</Text>;
};
export default Primeiro;

// console.warn('Olá'); //Serve para avisos em amarelo no celular

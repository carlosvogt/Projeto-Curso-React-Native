import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

// Componente do desafio de número aleatório, aula 24

function aleatório(props) {
  const { min, max } = props;
  const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <>
      <Text style={estilo.txtGrande}>
        Os valores passados foram: {min} e {max}
      </Text>

      <Text style={estilo.txtPadding}>Número aleatório: {random}</Text>
    </>
  );
}

export default aleatório;

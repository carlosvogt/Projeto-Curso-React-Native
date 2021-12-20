import React from 'react';
import { View, Text } from 'react-native';
import Estilo from './estilo';

function ParImpar({ num }) {
  /* if (num % 2 === 0) {
    return (
      <>
        <Text style={Estilo.txtGrande}> O resultado é: </Text>
        <Text style={Estilo.txtGrande}> Par </Text>
      </>
    );
  }
  return (
    <>
      <Text style={Estilo.txtGrande}> O resultado é: </Text>
      <Text style={Estilo.txtGrande}> Ímpar </Text>
    </>
  ); */
  return (
    <View>
      {num % 2 === 0 ? (
        <Text style={Estilo.txtGrande}> Par </Text>
      ) : (
        <Text style={Estilo.txtGrande}> Ímpar </Text>
      )}
    </View>
  );
}
export default ParImpar;

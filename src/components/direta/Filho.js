import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

function Filho({ a, b }) {
  return (
    <>
      <Text style={Estilo.txtGrande}> {a}</Text>
      <Text style={Estilo.txtGrande}> {b}</Text>
    </>
  );
}
export default Filho;

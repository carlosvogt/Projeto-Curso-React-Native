import React from 'react';
import { Text, Platform } from 'react-native';
import Estilo from './estilo';

function Diferenciar() {
  if (Platform.OS === 'android') {
    return <Text style={Estilo.txtGrande}>Android</Text>;
  }
  if (Platform.OS === 'ios') {
    return <Text style={Estilo.txtGrande}>iOS</Text>;
  }
  return <Text style={Estilo.txtGrande}>Outro</Text>;
}
export default Diferenciar;

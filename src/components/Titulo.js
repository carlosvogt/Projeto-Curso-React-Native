import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function titulo(props) {
  return (
    <View>
      <Text style={estilo.txtGrande}>{props.principal}</Text>
      <Text style={estilo.txtPequeno}>{props.secundario}</Text>
    </View>
  );
}

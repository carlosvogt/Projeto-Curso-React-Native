import React from 'react';
import { View, Text } from 'react-native';
import Estilo from '../estilo';

function ContadorDisplay({ num }) {
  return (
    <View>
      <Text
        style={[Estilo.txtGrande, { backgroundColor: 'black', color: 'white' }]}
      >
        {num}
      </Text>
    </View>
  );
}
export default ContadorDisplay;

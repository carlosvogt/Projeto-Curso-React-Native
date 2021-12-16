import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

function minMax(props) {
  console.log('Props recebido', props);
  return (
    <Text style={estilo.txtPadding}>
      O valor minimo é {props.min} e o valor máximo é {props.max}
    </Text>
  );
}

export default minMax;

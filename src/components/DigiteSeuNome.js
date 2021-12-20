import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

function DigiteSeuNome() {
  const [nome, setNome] = useState('teste');
  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(value) => setNome(value)}
      />
    </View>
  );
}
export default DigiteSeuNome;

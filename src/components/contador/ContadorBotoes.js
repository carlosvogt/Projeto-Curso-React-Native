import React from 'react';
import { View, Button } from 'react-native';

function ContadorBotoes({ inc, dec }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </View>
  );
}
export default ContadorBotoes;

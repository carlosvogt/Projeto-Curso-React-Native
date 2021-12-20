import React from 'react';
import { View } from 'react-native';
import Quadrado from './Quadrado';

function FlexboxV1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'black',
      }}
    >
      <Quadrado color="red" />
      <Quadrado color="blue" />
      <Quadrado color="pink" />
      <Quadrado color="green" />
      <Quadrado color="yellow" />
    </View>
  );
}
export default FlexboxV1;

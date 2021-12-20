import React from 'react';
import { View } from 'react-native';
import Quadrado from './Quadrado';

function FlexboxV2() {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
export default FlexboxV2;

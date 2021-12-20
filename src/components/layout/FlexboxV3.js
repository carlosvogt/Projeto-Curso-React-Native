import React from 'react';
import { View } from 'react-native';
import Quadrado from './Quadrado';

function FlexboxV3() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: 'black',
      }}
    >
      <Quadrado color="red" lado={20} />
      <Quadrado color="blue" lado={30} />
      <Quadrado color="pink" lado={40} />
      <Quadrado color="green" lado={50} />
      <Quadrado color="yellow" lado={60} />
    </View>
  );
}
export default FlexboxV3;

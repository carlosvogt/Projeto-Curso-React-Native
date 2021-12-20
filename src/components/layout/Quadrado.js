import React from 'react';
import { View } from 'react-native';

function Quadrado({ color = 'black', lado = 50 }) {
  return <View style={{ height: lado, width: lado, backgroundColor: color }} />;
}
export default Quadrado;

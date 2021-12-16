/* eslint func-names: ["error", "never"] */
import React from 'react';
import { Text } from 'react-native';

export default function comp() {
  return <Text>Comp #Oficial</Text>;
}

const Comp1 = function () {
  return <Text>Comp #01</Text>;
};
const Comp2 = function () {
  return <Text>Comp #02</Text>;
};

export { Comp1, Comp2 };

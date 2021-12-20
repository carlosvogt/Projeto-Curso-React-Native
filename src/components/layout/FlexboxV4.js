import React from 'react';
import { View } from 'react-native';

function FlexboxV4() {
  return (
    <View
      style={{
        flexGrow: 1,
        width: 100,
        backgroundColor: 'black',
      }}
    >
      <View
        style={{
          flexGrow: 1,
          backgroundColor: 'yellow',
        }}
      />

      <View
        style={{
          flexGrow: 3,
          backgroundColor: 'red',
        }}
      />

      <View
        style={{
          flexGrow: 1,
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
}
export default FlexboxV4;

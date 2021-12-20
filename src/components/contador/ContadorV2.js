import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

function ContadorV2() {
  const [num, setNum] = useState(0);
  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);
  return (
    <>
      <View>
        <Text style={Estilo.txtGrande}> CONTADOR </Text>
      </View>

      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
}
export default ContadorV2;

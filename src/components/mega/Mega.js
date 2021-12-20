import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import Estilo from '../estilo';

function Mega() {
  const [qtd, setQtd] = useState('');
  const [numerosGerados, setNumerosGerados] = useState('');

  function gerarNumeros() {
    if (qtd !== '') {
      setNumerosGerados([]);
      for (let contador = 1; contador <= qtd; contador += 1) {
        const random = Math.floor(Math.random() * 60 + 1);
        if (contador < qtd) {
          console.log(contador, qtd);
          setNumerosGerados((item) => [...item, `${random},`]);
        } else {
          setNumerosGerados((item) => [...item, random]);
        }

        console.log(random);
      }
    }
  }

  return (
    <>
      <Text style={Estilo.txtGrande}>Gerador da Mega-Sena</Text>
      <TextInput
        value={qtd}
        keyboardType="numeric"
        placeholder="Quantidade de números"
        onChangeText={(value) => setQtd(value)}
      />
      <Button title="Gerar Números" onPress={() => gerarNumeros()} />
      <Text> {numerosGerados}</Text>
    </>
  );
}
export default Mega;

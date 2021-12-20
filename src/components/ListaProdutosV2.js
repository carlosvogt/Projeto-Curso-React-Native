import React from 'react';
import { Text, FlatList } from 'react-native';
import Produtos from './Produtos';

function ListaProdutosV2() {
  return (
    <>
      <Text> Lista de Produtos</Text>
      <FlatList
        data={Produtos}
        keyExtractor={(i) => i.id}
        renderItem={({ item: p }) => {
          return (
            <Text>
              {p.id}) {p.nome} - R$ {p.preco}
            </Text>
          );
        }}
      />
    </>
  );
}
export default ListaProdutosV2;

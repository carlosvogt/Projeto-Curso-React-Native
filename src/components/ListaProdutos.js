import React from 'react';
import { Text } from 'react-native';
import Produtos from './Produtos';

function ListaProdutos() {
  return (
    <>
      <Text> Lista de Produtos</Text>
      {Produtos.map((item) => {
        return (
          <Text key={item.id}>
            {item.id}) {item.nome} - R$ {item.preco}
          </Text>
        );
      })}
    </>
  );
}
export default ListaProdutos;

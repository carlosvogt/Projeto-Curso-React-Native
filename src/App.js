import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Primeiro from './components/PrimeiroComponente';
// import Comp, { Comp1, Comp2 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatório from './components/Aleatório';
// import Titulo from './components/Titulo';
import Botao from './components/Botao';

const App = function inicial() {
  const styles = StyleSheet.create({
    app: {
      padding: 20,
      justifyContent: 'center', // alinhamento vertical
      flex: 1,
      alignItems: 'center', // alinhamento horizontal

      // flexGrow: 1 ou flex: 1,  irá ocupar todo o espaço livre
      // Ocupando todo o espaço da tela, podemos usar o justifyContent
      // Que irá centralizar o conteudo na vertical com base no espaço livre
      // O alignItens irá centralizar em relação a horizontal
    },
  });
  return (
    <View style={styles.app}>
      {/*
          <Primeiro />
          <Comp />
          <Comp1 />
          <Comp2 />
          <MinMax min="3" max="20" />
          <Aleatório min={3} max={60} />
           <Titulo
            principal="Cadastro de Produto"
            secundario="Tela de Cadastro de Produto"
      />
       */}
      <Botao />
    </View>
  );
};
export default App;

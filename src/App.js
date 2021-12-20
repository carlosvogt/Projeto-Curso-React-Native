import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
// import Primeiro from './components/PrimeiroComponente';
// import Comp, { Comp1, Comp2 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatório from './components/Aleatório';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/PaiImpar';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/ListaProdutos';
// import ListaProdutosV2 from './components/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import Quadrado from './components/layout/Quadrado';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

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
    <SafeAreaView style={styles.app}>
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
          </Titulo>
          <Botao />
          <Contador inicial={100} passo={3} />
          <Pai />
          <ContadorV2 />
          <Diferenciar />
          <ParImpar num={4} />
          <UsuarioLogado
              usuario={{ nome: 'Carlos', email: 'carlos.vogt@gmail.com' }}
          />
          <ListaProdutos />
          <ListaProdutosV2 />
          <DigiteSeuNome />
          <FlexboxV1 />
          <FlexboxV2 />
          <FlexboxV3 />
          <FlexboxV4 />
      />
       */}

      <Mega />
    </SafeAreaView>
  );
};
export default App;

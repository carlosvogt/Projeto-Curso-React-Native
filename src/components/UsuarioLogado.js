import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';
import ComponentIf from './If';

function UsuarioLogado({ usuario = {} }) {
  return (
    <>
      <ComponentIf teste={usuario && Object.keys(usuario).length !== 0}>
        <Text style={Estilo.txtGrande}>Usuário Logado:</Text>
        <Text>
          {usuario.nome} - {usuario.email}
        </Text>
      </ComponentIf>
    </>
  );
}
export default UsuarioLogado;

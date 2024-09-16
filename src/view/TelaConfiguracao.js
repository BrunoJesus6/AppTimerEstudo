import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function TelaConfiguracao({ navigation }) {
  const [tempoTrabalho, setTempoTrabalho] = useState('25');
  const [tempoDescanso, setTempoDescanso] = useState('5');

  const salvarConfiguracoes = () => {
    navigation.navigate('Cronometro', {
      trabalho: parseInt(tempoTrabalho, 10) * 60,
      descanso: parseInt(tempoDescanso, 10) * 60,
    });
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.label}>Tempo de Trabalho (minutos)</Text>
      <TextInput
        value={tempoTrabalho}
        keyboardType="numeric"
        onChangeText={texto => setTempoTrabalho(texto)}
        style={estilos.input}
        mode="outlined"
        theme={{ colors: { text: '#ffffff', primary: '#ffffff', background: '#333333' }}}
      />

      <Text style={estilos.label}>Tempo de Descanso (minutos)</Text>
      <TextInput
        value={tempoDescanso}
        keyboardType="numeric"
        onChangeText={texto => setTempoDescanso(texto)}
        style={estilos.input}
        mode="outlined"
        theme={{ colors: { text: '#ffffff', primary: '#ffffff', background: '#333333' }}}
      />

      <Button
        mode="contained"
        onPress={salvarConfiguracoes}
        style={estilos.botaoSalvar}
        labelStyle={estilos.textoBotao}
      >
        Salvar
      </Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#333333',
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  botaoSalvar: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#333333',
  },
  textoBotao: {
    fontSize: 18,
    color: '#ffffff',
  },
});
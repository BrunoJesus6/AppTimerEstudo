import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function TelaCronometro({ route, navigation }) {
  const [tempoTrabalho, setTempoTrabalho] = useState(1500);
  const [tempoDescanso, setTempoDescanso] = useState(300);
  const [tempo, setTempo] = useState(1500);
  const [rodando, setRodando] = useState(false);
  const [emTrabalho, setEmTrabalho] = useState(true);

  useEffect(() => {
    if (route.params?.trabalho) {
      setTempoTrabalho(route.params.trabalho);
      setTempo(route.params.trabalho);
    }
    if (route.params?.descanso) {
      setTempoDescanso(route.params.descanso);
    }
  }, [route.params]);

  useEffect(() => {
    let intervalo;
    if (rodando && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo(prevTempo => prevTempo - 1);
      }, 1000);
    } else if (!rodando && tempo !== 0) {
      clearInterval(intervalo);
    } else if (tempo === 0) {
      if (emTrabalho) {
        setTempo(tempoDescanso);
      } else {
        setTempo(tempoTrabalho);
      }
      setEmTrabalho(!emTrabalho);
    }
    return () => clearInterval(intervalo);
  }, [rodando, tempo, emTrabalho]);

  const redefinirCronometro = () => {
    setTempo(tempoTrabalho);
    setRodando(false);
    setEmTrabalho(true);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.textoDescricao}>
        {emTrabalho ? 'Tempo de Trabalho' : 'Tempo de Descanso'}
      </Text>
      <Text style={estilos.textoCronometro}>
        {`${Math.floor(tempo / 60)}:${tempo % 60 < 10 ? '0' : ''}${tempo % 60}`}
      </Text>

      <View style={estilos.botoesContainer}>
        <Button
          mode="contained"
          onPress={() => setRodando(!rodando)}
          style={estilos.botao}
          labelStyle={estilos.textoBotao}
        >
          {rodando ? 'Pausar' : 'Iniciar'}
        </Button>

        <Button
          mode="outlined"
          onPress={redefinirCronometro}
          style={estilos.botao}
          labelStyle={estilos.textoBotao}
        >
          Redefinir
        </Button>
      </View>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Configuracao')}
        labelStyle={estilos.textoBotaoConfig}
      >
        Configurações
      </Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  textoDescricao: {
    fontSize: 20,
    color: '#cccccc',
    marginBottom: 10,
  },
  textoCronometro: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  botao: {
    flex: 1,
    marginHorizontal: 10,
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
  textoBotaoConfig: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#ffffff',
  },
});
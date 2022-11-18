import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {

  // variáveis que vão alterar a imagem do biscoito.
  // O useState aqui passa o estado inicial.
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Só vive o propósito quem suporta o processo.',
    'Faça o melhor na condição atual.',
    'Quem não é visto não é lembrado.',
    'Para rir tem que fazer rir!.',
    'Seja luz na vida de alguém.'
  ]

  function mudar(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase('"' + frases[numeroAleatorio] + '"');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function fechar(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (

    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={ mudar } >
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#313131' }]} onPress={ fechar } >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#313131' }]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Pressione para gerar as dezenas da mega sena!');

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Gerar dezenas" onPress={() => { setOutputText(megaSena())}} />
    </View>
  );
}

function megaSena() {
  let numeros = Array(6);
  let i = 0;
  let retorno = "";

  while (i < numeros.length) {
    const numero = Math.floor(Math.random() * 61);
    let existe = false;

    for (let ii = 0; ii < i; ii++) {
      if(numeros[ii] === numero)
        existe = true;
    }

    if(!existe){
      numeros[i] = numero;
      retorno += (numero < 10 ? "0" + numero : numero) + " ";
      i++;
    }
  }

  return retorno;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

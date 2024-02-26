import React from 'react';
import { View, StyleSheet } from 'react-native';

import TelaInicial from './src/components/TelaInicial/TelaInicial';

export default function App() {  
  return(
    <View style={styles.container}>
      <TelaInicial/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
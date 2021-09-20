import React from 'react';
import { View, StyleSheet } from 'react-native';

import TelaInicial from './TelaInicial';

export default class App extends React.Component{

  state = {
    isLoaded: false,
  };

  render(){
  return(
    <View style={styles.container}>
      <TelaInicial/>
    </View>
  )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
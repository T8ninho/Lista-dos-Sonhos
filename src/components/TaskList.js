import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import IconButton from './IconButton';

export default function TaskList({ data, handleDelete, handleComplete, handleEdit }){
    // if(!data.completed) {
      return(
        <Animatable.View  style={styles.container} animation="bounceIn" useNativeDriver >
              <IconButton onPress={handleComplete} name={data.completed ? "check-square-o" : "square-o"} size={30} color={data.completed ? "#00ff00" : "#fff"} />
              <Text style={data.completed ? styles.taskCompleted : styles.taskIncomplete}>{data.title}</Text>
              <View style={styles.containerTaskButtons}>
                <IconButton onPress={handleEdit} name="edit" color="#fff" style={styles.ButtonEdit} />
                <IconButton onPress={handleDelete} name="remove" color="#ec5353" />
              </View>
        </Animatable.View>
    )
    // }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 8,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#171d31aa',
      borderRadius: 5,
      padding: 10,
      // elevation: 1,
    },
    containerTaskButtons: {
      flex: 1,
      flexDirection: 'row-reverse',
    },
    ButtonEdit: {
      height: '100%',
      justifyContent: 'center',
      paddingLeft: 10,
    },
  // Incompletas
    taskIncomplete: {
        color: "#fff",
        fontSize: 20,
        paddingLeft: 8,
        paddingRight: 20,
    },
  // Completas
    taskCompleted: {
      color: "#00ff00",
      fontSize: 20,
      paddingLeft: 8,
      paddingRight: 20,
      textDecorationLine: 'line-through',
    }
});

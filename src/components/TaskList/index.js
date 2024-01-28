import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

export default function TaskList({ data, handleDelete, handleComplete }){
    return(
        <Animatable.View 
          style={styles.container}
          animation="bounceIn"
          useNativeDriver
        >
          {data.completed ? (
            // Tarefas Incompletas
            <> 
              <TouchableOpacity 
                onPress={handleComplete}
                style={styles.ButtonConfirm}
              >
                <FontAwesome name="check" size={30} color="#00ff00" />
              </TouchableOpacity>
              <View>
                <Text style={styles.taskCompleted}>{data.task}</Text>
              </View>
            </>
          ) : (
            // Tarefas Completadas
            <> 
              <TouchableOpacity 
                onPress={handleComplete}
                style={styles.ButtonConfirm}
              >
                <FontAwesome name="square-o" size={30} color="#fff" />
              </TouchableOpacity>
              <View>
                <Text style={styles.taskIncomplete }>{data.task}</Text>
              </View>
            </>            
          )}
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#171d31',
      borderRadius: 5,
      padding: 10,
      elevation: 1,
    },
    ButtonConfirm: {
      borderRightColor: '#fff',
      borderRightWidth: 1,
      paddingRight: 8,
      height: '100%',
      justifyContent: 'center'
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

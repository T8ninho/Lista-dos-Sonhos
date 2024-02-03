import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

export default function TaskList({ data, handleDelete, handleComplete, handleEdit }){
    return(
        <Animatable.View 
          style={styles.container}
          animation="bounceIn"
          useNativeDriver
        >
              <View style={styles.containerTask}>
                <TouchableOpacity 
                  onPress={handleComplete}
                  style={styles.ButtonConfirm}
                >
                  <FontAwesome 
                    name={data.completed ? "check-square-o" : "square-o"} 
                    size={30} 
                    color={data.completed ? "#00ff00" : "#fff"} 
                  />
                </TouchableOpacity>
                <View>
                  <Text style={data.completed ? styles.taskCompleted : styles.taskIncomplete}>{data.title}</Text>
                 </View>
              </View>
              <View style={styles.containerTaskButtons}>
                <TouchableOpacity 
                  onPress={handleEdit}
                  style={styles.ButtonEdit}
                >
                  <FontAwesome 
                    name="edit"
                    size={30} 
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={handleDelete}
                  style={styles.ButtonDelete}
                >
                  <FontAwesome 
                    name="remove"
                    size={30} 
                    color="#ec5353"
                  />
                </TouchableOpacity>
              </View>
        </Animatable.View>
    )
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
    containerTask: {
      flex: 1,
      flexDirection: 'row'
    },
    containerTaskButtons: {
      flex: 1,
      flexDirection: 'row-reverse',
    },
    ButtonConfirm: {
      paddingRight: 8,
      height: '100%',
      justifyContent: 'center'
    },
    ButtonEdit: {
      height: '100%',
      justifyContent: 'center',
      paddingLeft: 10,
    },
    ButtonDelete: {
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

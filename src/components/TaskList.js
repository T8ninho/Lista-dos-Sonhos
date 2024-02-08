import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import IconButton from './IconButton';
import { Swipeable } from 'react-native-gesture-handler';

export default function TaskList({ data, handleDelete, handleComplete, handleEdit }){

  
      const LeftActions = () => {
        return (
          <IconButton 
            onPress={handleEdit} 
            name="edit" 
            color="#fff"  
            style={{
              backgroundColor: '#187e9f', 
              flex: 1, 
              width: 50, 
              justifyContent: 'center', 
              alignItems: 'center'
            }} 
          />
          )
      }
      const RightActions = () => {
        return (
          <IconButton 
            onPress={handleDelete} 
            name="remove" 
            color="#fff"  
            style={{
              backgroundColor: '#ec5353', 
              flex: 1, 
              width: 50, 
              justifyContent: 'center', 
              alignItems: 'center'
            }} 
          />
        )
      }

      return(
        <Swipeable
          renderLeftActions={LeftActions}
          renderRightActions={RightActions}
        >
          <Animatable.View  style={styles.container} animation="bounceIn" useNativeDriver >
            <IconButton onPress={handleComplete} name={data.completed ? "check-square-o" : "square-o"} size={30} color={data.completed ? "#00ff00" : "#fff"} />
            <Text style={data.completed ? styles.taskCompleted : styles.taskIncomplete}>{data.title}</Text>
          </Animatable.View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#171d31',
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

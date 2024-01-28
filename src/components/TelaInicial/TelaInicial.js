import React, { useState, useCallback, useEffect } from 'react';
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View, 
  StatusBar, 
  TouchableOpacity, 
  FlatList, 
  Modal, 
  TextInput,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuid } from 'uuid';

import TaskList from '../TaskList';
import BackgroundImage from "../../Images/background.jpg";
import FabButton from '../FabButton';
import NovaTarefa from '../NovaTarefa/NovaTarefa';

export default function TelaInicial() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')

  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem('@task');
      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }
    loadTasks();
    console.log(task)
  }, [])

  useEffect(() => {
    async function saveTasks(){
      await AsyncStorage.setItem('@task', JSON.stringify(task));
      
    }
    saveTasks();
  }, [task]);

  function handleAdd(){
    if(input === '') return;
    if(input == ' ') return;
    const data = {
      key: uuid(),
      task: input,
      completed: false
    };
    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }


  function handleComplete(data) {
    setTask((item) => item.map((task) => task.key === data ? {...task, completed: !task.completed} : task))
  }
  const handleDelete = useCallback((data) => {
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image} blurRadius={6}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />
      
      <View style={styles.titleView}>
        <Text style={styles.title}> Minhas tarefas </Text>
      </View>
        
     
      <FlatList 
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ 
          ({item}) => <TaskList 
                        data={item} 
                        handleDelete={handleDelete} 
                        handleComplete={() => handleComplete(item.key)} 
                      />
        }
      />
 
      <NovaTarefa 
        visible={open} 
        input={input} 
        handleAdd={handleAdd} 
        setInput={setInput} 
        setOpen={setOpen}
      />

      <FabButton NovoItem={() => setOpen(true)} style={{ bottom: 80, right: 60 }}/>

      </ImageBackground>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071e42',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  titleView: {
    marginTop: 5,
    paddingBottom: 4,
    borderBottomWidth: 0.5
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 3,
      height: 3
    },
    textShadowRadius: 10,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 2,
    shadowOffset:{
      width: 1,
      height: 3,
    }
  }
});

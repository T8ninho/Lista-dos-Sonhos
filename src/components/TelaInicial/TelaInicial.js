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

import TaskList from '../TaskList';
import BackgroundImage from "../../Images/background.jpg";
import FabButton from '../FabButton';

export default function TelaInicial() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')

  const Cor = '#fff';

  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem('@task');
      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }
    loadTasks();
  }, [])

  useEffect(() => {
    async function saveTasks(){
      await AsyncStorage.setItem('@task', JSON.stringify(task));
      
    }
    saveTasks();
  }, [task]);

  function handleAdd(){
    if(input === '') return;
    const KEY = Math.floor(Math.random() * 9999999999)
    const data = {
      key: KEY,
      task: input
    };
    setTask([...task, data]);
    setOpen(false);
    setInput('');
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
        renderItem={ ({item}) => <TaskList data={item} handleDelete={handleDelete} /> }
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
  },
  modal: {
    flex: 1,
    backgroundColor: '#171d31',
  },
  modalHeader: {
    marginLeft: 10,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoNovaTarefa: {
    position: 'absolute',
    right: 0,
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 23,
    color: '#fff',
  },
  mordalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd: {
    backgroundColor: '#2f7',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText: {
    fontSize: 20,
  }
});

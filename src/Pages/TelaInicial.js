import React, { useState, useEffect } from 'react';
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  FlatList, 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuid } from 'uuid';

import TaskList from '../components/TaskList';
import BackgroundImage from "../Images/background.jpg";
import FabButton from '../components/FabButton';

import NovaTarefa from './NovaTarefa';
import ModeloTarefas from './ModeloTarefa';

export default function TelaInicial() {
  const [tasks, setTasks] = useState([]);
  const [taskEdit, setTaskEdit] = useState([]);
  const [openModalTask, setOpenModalTask] = useState(false)
  const [openModalModelo, setOpenModalModelo] = useState(false)
  const [input, setInput] = useState('')
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const taskStorage = await AsyncStorage.getItem('@tasks');
        if (taskStorage) {
          setTasks(JSON.parse(taskStorage));
        }
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };
    
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks:', error);
      }
    };

    saveTasks();
    console.log(tasks)
  }, [tasks]);

  const BackButton = () => {
    setEditMode(false)
    setInput('')
    setTaskEdit([])
    setOpenModalTask(false)
    setOpenModalModelo(false)
  }

  const handleAdd = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: uuid(), title: input, completed: false }]);
      BackButton()
    }
  };
  const handleAddModelo = (item) => {
      setTasks([...tasks, { id: uuid(), title: item, completed: false }]);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleComplete = (id) => {
	const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks) 
  }
  
  const handleEdit = (Item) => {
    setEditMode(true)
    setOpenModalTask(true);
    setTaskEdit(Item)
    setInput(Item.title)
    console.log(Item)
  }

  const saveEdit = () => {
    const updatedTasks = tasks.map((item) =>
    item.id === taskEdit.id ? { ...item, id: item.id, title: input, completed: item.completed } : item
    );
    setTasks(updatedTasks) 
    BackButton()
    console.log(updatedTasks)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image} blurRadius={6}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />
      
      <View style={styles.titleView}>
        <Text style={styles.title}> Lista dos Sonhos </Text>
      </View>
     
      <FlatList 
        marginHorizontal={10}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
              <TaskList 
                data={item} 
                handleDelete={() => handleDelete(item.id)} 
                handleComplete={() => handleComplete(item.id)}
                handleEdit={() => handleEdit(item)}
              />
        )
        }
      />
 
      <NovaTarefa
        visible={openModalTask}
        input={input}
        handleAdd={handleAdd}
        setInput={setInput}
        BackButton={BackButton}
        editMode={editMode}
        saveEdit={saveEdit}
      />
      <ModeloTarefas
        visible={openModalModelo}
        handleAddModelo={handleAddModelo}
        BackButton={BackButton}
      />

      <FabButton
        NovaTarefa={() => setOpenModalTask(true)}
        ModeloTarefas={() => setOpenModalModelo(true)}
        style={{ bottom: 80, right: 60 }}
      />

      </ImageBackground>
    </View>
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

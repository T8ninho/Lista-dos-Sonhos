import React, { useState, useEffect } from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  FlatList, 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuid } from 'uuid';

import TaskList from '../components/TaskList';
import FabButton from '../components/FabButton';

import NovaTarefa from './NovaTarefa';
import Temas from './Temas';
import BgImage from '../components/BgImage';
import Listas from '../components/Listas/Listas'

export default function TelaInicial() {
  const [theme, setTheme] = useState(Listas.Temas[1]);

  const [tasks, setTasks] = useState([]);
  const [taskEdit, setTaskEdit] = useState([]);
  const [openModalTask, setOpenModalTask] = useState(false)
  const [openModalTemas, setOpenModalTemas] = useState(false)
  const [input, setInput] = useState('')
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    
    const loadTheme = async () => {
      try {
        const themeStorage = await AsyncStorage.getItem('@theme');
        if (themeStorage) {
          setTheme(JSON.parse(themeStorage));
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };
    loadTheme();

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
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem('@theme', JSON.stringify(theme));
      } catch (error) {
        console.error('Error saving theme:', error);
      }
    };

    saveTheme();
  }, [theme]);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks:', error);
      }
    };

    saveTasks();
  }, [tasks]);

  const handleBack = () => {
    setEditMode(false)
    setInput('')
    setTaskEdit([])
    setOpenModalTask(false)
    setOpenModalTemas(false)
  }

  const handleSetTheme = (item) => {
    setTheme(item)
    console.log(item)
  }

  const handleAdd = () => {
    if (input.trim() !== '') {
      const data = input.split(',').map((item, index) => ({
        id: uuid(),
        title: item.trim(),
        // completed: false
      }));
      setTasks([...tasks, ...data]);
      handleBack()
    }
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
    handleBack()
    console.log(updatedTasks)
  }
  
  return (
    <View style={styles.container}>
      <BgImage theme={theme}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />
      
      <View style={styles.titleView}>
        <Text style={styles.title}> Lista dos Sonhos </Text>
      </View>
     
      <FlatList 
        style={{paddingTop: 10, paddingBottom: 10}}
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
        )}
        ItemSeparatorComponent={() => <View style={{flex: 1, height: 1, backgroundColor: '#ddd', marginBottom: 10, marginTop: 10}} />}
      />
 
      <NovaTarefa
        visible={openModalTask}
        input={input}
        handleAdd={handleAdd}
        setInput={setInput}
        handleBack={handleBack}
        editMode={editMode}
        saveEdit={saveEdit}
        theme={theme}
      />
      <Temas
        visible={openModalTemas}
        handleBack={handleBack}
        theme={theme}
        handleSetTheme={handleSetTheme}
      />

      <FabButton
        NovaTarefa={() => setOpenModalTask(true)}
        Temas={() => setOpenModalTemas(true)}
        style={{ bottom: 80, right: 60 }}
      />

      </BgImage>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071e42',
  },
  titleView: {
    marginTop: 5,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
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

import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

import Gatinho from '../../Images/Gatinho.gif'

const NovaTarefa = () => {
	return(
		<Modal animationType="slide" transparent={false} visible={open}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Ionicons style={{marginLeft: 5, marginRight: 5}} name="arrow-back" size={30} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Nova tarefa</Text>
            </>
            <Image style={styles.logoNovaTarefa} source={Gatinho} />          
          </View>

          <Animatable.View style={styles.modalBody} animation="fadeInUp">
            <TextInput 
				multiline={true}
				placeholderTextColor="#000"
				placeholder="O que precisa fazer hoje?" 
				style={styles.input}
				value={input}
				onChangeText={ (texto) => setInput(texto)}
            />

            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Modal>
	)
}
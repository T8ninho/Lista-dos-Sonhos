import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

import TaskList from "../components/TaskList";
import ButtonModelo from "../components/ModeloTarefa/ButtonModelo";

export default function ModeloTarefas({ visible, handleAddModelo, BackButton }) {
	return(
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View style={styles.modal}>
				<View style={styles.modalHeader}>
					<TouchableOpacity onPress={BackButton}>
						<Ionicons style={{marginLeft: 5, marginRight: 5}} name="arrow-back" size={30} color="#fff" />
					</TouchableOpacity>
					<Text style={styles.modalTitle}>Modelo de lista</Text>
				</View>

				<Animatable.View style={styles.modalBody} animation="fadeInUp">
					<ButtonModelo 
						title="Casa"
					/>
					<TouchableOpacity style={styles.modalButtonAdd} onPress={() => handleAddModelo('casa')}>
						<Text style={styles.modalButtonAddText}>Casa</Text>
					</TouchableOpacity>
				</Animatable.View>
				
			</View>
      	</Modal>
	)
}


;

const styles = StyleSheet.create({
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
	modalTitle: {
		marginLeft: 15,
		fontSize: 23,
		color: '#fff',
	},
	containerImage: {
		alignItems: 'center',
		paddingTop: '20%'
	},
	modalBody: {
		marginTop: 15,
	},
	modalInput: {
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
	modalButtonAdd: {
		backgroundColor: '#2f7',
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
		height: 40,
		borderRadius: 5,
	},
	modalButtonAddText: {
		fontSize: 20,
	},
})

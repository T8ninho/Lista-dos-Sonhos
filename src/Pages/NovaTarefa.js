import { Image, Modal, StyleSheet,  TextInput,  View } from "react-native";
import * as Animatable from 'react-native-animatable';

import BgImage from "../components/BgImage";
import Gatinho from '../Images/Gatinho.gif'
import ButtonAdd from "../components/ButtonAdd";
import ButtonBack from "../components/ButtonBack";


export default function NovaTarefa({ visible, input, handleAdd, setInput, handleBack, editMode, saveEdit }) {
	return(
		<Modal animationType="fade" transparent={false} visible={visible} onRequestClose={handleBack}>
		<BgImage>
			<View style={styles.modal}>
				<ButtonBack onPress={handleBack}>{editMode ? 'Editando Tarefa' : 'Nova Tarefa'}</ButtonBack>
				<Animatable.View style={styles.modalBody} animation="fadeInUp">
					<TextInput 
						multiline={true}
						placeholderTextColor="#000"
						placeholder="O que precisa fazer hoje?" 
						style={styles.modalInput}
						value={input}
						onChangeText={ (texto) => setInput(texto)}
					/>
					<ButtonAdd onPress={editMode ? saveEdit : handleAdd}>{editMode ? 'Atualizar tarefa' : 'Cadastrar'}</ButtonAdd>
					<View style={styles.containerImage}>
						<Image source={Gatinho} />  
					</View>
				</Animatable.View>
				
			</View>
		</BgImage>
      	</Modal>
	)
}


;

const styles = StyleSheet.create({
	modal: {
		flex: 1,
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
	}
})

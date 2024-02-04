import { FlatList, Modal, StyleSheet, View } from "react-native";

import ButtonAdd from "../components/ButtonAdd";
import ButtonBack from "../components/ButtonBack";
import Categorias from '../components/Categorias'

export default function ModeloTarefas({ visible, handleAddModelo, handleBack }) {

	const Feira = Categorias.feira.forEach((item) => {
		console.log(item.title)
	  });

	return(
		<Modal animationType="fade" transparent={true} visible={visible} onRequestClose={handleBack}>
			<View style={styles.modal}>
				<ButtonBack onPress={handleBack}>Modelo de lista</ButtonBack>
				<View style={{marginTop: 15}}>
				</View>

				<FlatList
					style={{marginTop: 15}}
					marginHorizontal={10}
					data={Categorias.limpeza}
					keyExtractor={(item) => item.id}
					renderItem={({item}) => <ButtonAdd onPress={handleAddModelo}>{item.title}</ButtonAdd>}
      			/>	
				
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

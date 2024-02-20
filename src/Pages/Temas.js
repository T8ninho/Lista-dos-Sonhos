import { FlatList, Modal, StyleSheet, View } from "react-native";

import TemaItem from "../components/TemaItem";
import ButtonBack from "../components/ButtonBack";
import Categorias from '../components/Categorias'
import BgImage from "../components/BgImage";

export default function Temas({ visible, handleAddModelo, handleBack }) {


	return(
		<Modal animationType="fade" transparent={true} visible={visible} onRequestClose={handleBack}>
			<BgImage>
				<View style={styles.modal}>
					<ButtonBack onPress={handleBack}>Temas</ButtonBack>
					<View style={styles.modalContainer}>
						<FlatList
							style={{marginTop: 15}}
							marginHorizontal={10}
							data={Categorias.limpeza}
							keyExtractor={(item) => item.id}
							renderItem={({item}) => <TemaItem onPress={handleAddModelo}>{item.title}</TemaItem>}
						/>
					</View>					
				</View>
			</BgImage>
      	</Modal>
	)
}


;

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		// backgroundColor: '#171d31',
	},
	modalContainer: {
		justifyContent: 'center',
		flexDirection: 'row',

	}
})

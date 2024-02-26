import { FlatList, Modal, StyleSheet, View } from "react-native";

import TemaItem from "../components/TemaItem";
import ButtonBack from "../components/ButtonBack";
import Listas from '../components/Listas/Listas'
import BgImage from "../components/BgImage";

export default function Temas({ visible, handleSetTheme, theme, handleBack }) {

	const numColumns = 3;

	return(
		<Modal animationType="fade" transparent={true} visible={visible} onRequestClose={handleBack}>
			<BgImage theme={theme}>
				<View style={styles.modal}>
					<ButtonBack onPress={handleBack}>Temas</ButtonBack>
						<FlatList
							marginHorizontal={10}
							data={Listas.Temas}
							numColumns={numColumns}
      						contentContainerStyle={styles.container}
							keyExtractor={(item) => item.id}
							renderItem={({item}) => <TemaItem numColumns={numColumns} item={item} onPress={() => handleSetTheme(item)}/>}
						/>
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

	},
	container: {
		justifyContent: 'space-between',
		alignItems: 'center'
	  },
})

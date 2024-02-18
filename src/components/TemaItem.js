import { View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function TemaItem({children, onPress}) {
	return(
		<Animatable.View animation="flipInX">
			<TouchableOpacity 
				style={{
					backgroundColor: '#171d31',
					marginTop: 10,
					height: 100,
					width: 100,
					borderRadius: 5
				}} 
				onPress={() => onPress(children)}
			>
				<View style={{
					backgroundColor: '#CCC',
					flex: 1,
					margin: 5,
					borderRadius: 5
				}} >

				</View>
			</TouchableOpacity>
		</Animatable.View>
	)
}
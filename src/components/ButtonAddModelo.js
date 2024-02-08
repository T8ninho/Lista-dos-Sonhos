import { Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ButtonAddModelo({children, onPress}) {
	return(
		<Animatable.View animation="flipInX">
			<TouchableOpacity 
				style={{
					backgroundColor: '#171d31',
					marginTop: 10,
					alignItems: 'center',
					justifyContent: 'center',
					marginLeft: 10,
					marginRight: 10,
					height: 40,
					borderRadius: 5
				}} 
				onPress={() => onPress(children)}
			>
				<Text style={{fontSize: 20, color: '#fff'}}>{children}</Text>
			</TouchableOpacity>
		</Animatable.View>
	)
}
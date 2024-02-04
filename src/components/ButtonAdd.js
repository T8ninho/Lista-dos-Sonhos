import { Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ButtonAdd({children, onPress}) {
	return(
		<Animatable.View animation="flipInX">
			<TouchableOpacity 
				style={{
					backgroundColor: '#2f7',
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
				<Text style={{fontSize: 20,}}>{children}</Text>
			</TouchableOpacity>
		</Animatable.View>
	)
}
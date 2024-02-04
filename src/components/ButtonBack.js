import {    Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ButtonBack({children, onPress}) {
	return(
		<View style={{
			marginLeft: 10,
			paddingTop: 20,
			flexDirection: 'row',
			alignItems: 'center'}}>
				<TouchableOpacity onPress={onPress}>
					<Ionicons style={{marginLeft: 5, marginRight: 5}} name="arrow-back" size={30} color="#fff" />
				</TouchableOpacity>
			<Text style={{
				marginLeft: 15,
				fontSize: 23,
				color: '#fff'
			}}>
				{children}
			</Text>
		</View>
	)
}
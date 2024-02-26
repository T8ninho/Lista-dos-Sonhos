import {    Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ButtonBack({children, onPress}) {
	return(
		<>
			<View style={{
				paddingBottom: 20,
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: '#171d31'
				}}>
					<TouchableOpacity onPress={onPress}>
						<Ionicons 
							style={{
								marginLeft: 10,
								marginRight: 5,
								textShadowColor: '#000',
								textShadowRadius: 10
							}} 
							name="arrow-back" 
							size={30} 
							color="#fff" 
						/>
					</TouchableOpacity>
				<Text style={{
					marginLeft: 15,
					fontSize: 23,
					color: '#fff',
					textShadowColor: '#000',
					textShadowRadius: 10,
				}}>
					{children}
				</Text>
			</View>
			<View style={{
				borderBottomWidth: 0.5,
				borderBottomColor: '#ddd'}}
			/>
		</>
	)
}
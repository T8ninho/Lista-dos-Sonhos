import { TouchableOpacity, Text, Dimensions, ImageBackground, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import background_01 from '../Images/background_01.jpg'

export default function TemaItem({item, numColumns, onPress}) {

	const windowWidth = Dimensions.get('window').width;

	return(
		<Animatable.View animation="flipInX">
			
				<TouchableOpacity 
					style={{
						backgroundColor: '#171d31',
						marginTop: 10,
						marginRight: 10,
						width: (windowWidth - 50) / numColumns,
						aspectRatio: 1,
						borderRadius: 5
					}} 
					onPress={onPress}
				>
					<ImageBackground
						blurRadius={6}
						style={{
							backgroundColor: "#CCC",
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							margin: 5,
							borderRadius: 5
						}}  
						source={item.image}>
						
						<View style={{
							backgroundColor: '#ffffff40',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							height: '30%'
						}}>
							<Text style={{color: "#000", fontSize: 16}}> {item.title} </Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
		</Animatable.View>
	)
}
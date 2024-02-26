import { TouchableOpacity } from "react-native";

import * as Animated from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons'

export default function IconButton({onPress, style, name, color}) {
   
	return(
		<TouchableOpacity
            onPress={onPress}
        >
            <Animated.View 
            style={style}>
            <FontAwesome 
                name={name}
                size={30} 
                color={color}
            />
            </Animated.View>
        </TouchableOpacity>
	)
}
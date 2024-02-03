import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export default function IconButton({onPress, style, name, color}) {
	return(
		<TouchableOpacity
            onPress={onPress}
            style={style}
        >
            <FontAwesome 
                name={name}
                size={30} 
                color={color}
            />
        </TouchableOpacity>
	)
}
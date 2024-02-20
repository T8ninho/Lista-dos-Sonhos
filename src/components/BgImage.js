import { ImageBackground } from "react-native";
import background_01 from '../Images/background_01.jpg';

export default function BgImage({children}) {
	return(
		<ImageBackground 
			source={background_01} 
			resizeMode="cover" 
			style={{ flex: 1, justifyContent: "center",  }} 
			blurRadius={6}
		>
			{children}
		</ImageBackground>
	)
}
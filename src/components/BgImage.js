import { ImageBackground } from "react-native";
import BackgroundImage from '../Images/background.jpg';

export default function BgImage({children}) {
	return(
		<ImageBackground 
			source={BackgroundImage} 
			resizeMode="cover" 
			style={{ flex: 1, justifyContent: "center",  }} 
			blurRadius={6}
		>
			{children}
		</ImageBackground>
	)
}
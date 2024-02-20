import { ImageBackground } from "react-native";

export default function BgImage({children, theme}) {
	return(
		<ImageBackground 
			source={theme.image} 
			resizeMode="cover" 
			style={{ flex: 1, justifyContent: "center",  }} 
			// blurRadius={6}
		>
			{children}
		</ImageBackground>
	)
}
import 'react-native-get-random-values' //reponsável por fazer o UUID funcionar, ele é basicamente uma dependência

import TelaInicial from './src/Pages/TelaInicial';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
	return(
		<GestureHandlerRootView style={{flex: 1}}>
			<TelaInicial/>
		</GestureHandlerRootView>
	)
};
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Navigation } from './Navigation'
import { registerRootComponent } from 'expo'
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const App = () => {
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<ApplicationProvider {...eva} theme={eva.light}>
					<Navigation />
					<StatusBar />
				</ApplicationProvider>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	)
}

registerRootComponent(App)

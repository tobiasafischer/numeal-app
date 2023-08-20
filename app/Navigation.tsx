import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Search } from './screens'
import { Text } from '@ui-kitten/components'

const Tab = createBottomTabNavigator()

const Header = () => {
	const insets = useSafeAreaInsets()

	return (
		<View style={{ marginTop: insets.top }} className='items-left bg-[#fff] pt-2 pb-2 pl-8'>
			<Text style={{ color: '#333', fontSize: 22, paddingLeft: 12 }}>numeal</Text>
		</View>
	)
}
const navTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#fff',
	},
}

const Icon = ({ focused, color, name }: { focused: boolean; color: string; name: any }) => (
	<View style={{ paddingTop: 10 }}>
		<Ionicons name={name} size={25} color={focused ? color : '#333'} />
	</View>
)

export const Navigation = () => {
	return (
		<NavigationContainer theme={navTheme}>
			<Tab.Navigator
				screenOptions={() => ({
					tabBarStyle: {
						height: 80,
						paddingHorizontal: 5,
						paddingTop: 0,
						backgroundColor: '#fff',
						position: 'absolute',
						borderTopWidth: 1,
						borderTopColor: '#374151',
					},
					tabBarActiveTintColor: '#b91c1c',
					tabBarIconStyle: {
						color: '#fff',
					},
					tabBarLabelStyle: {
						display: 'none', // Hide the tab labels
					},
				})}>
				<Tab.Screen
					name='Search'
					component={Search}
					options={{
						header: () => <Header />,
						tabBarIcon: ({ color, focused }) => (
							<Icon color={color} focused={focused} name='search' />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

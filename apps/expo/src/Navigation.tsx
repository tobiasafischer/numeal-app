import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen, Search, SignInSignUpScreen } from './screens'

const Tab = createBottomTabNavigator()

const Header = () => {
   const insets = useSafeAreaInsets()

   return (
      <View style={{ marginTop: insets.top }} className="items-left bg-[#1f2937] pt-2 pb-2 pl-8">
         <Text className="text-lg font-bold text-slate-100">numeal</Text>
      </View>
   )
}
const navTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      background: '#1f2937',
   },
}

const Icon = ({ focused, color, name }: { focused: boolean; color: string; name: any }) => (
   <View style={{ paddingTop: 10 }}>
      <Ionicons name={name} size={25} color={focused ? color : '#f3f4f6'} />
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
                  backgroundColor: '#1f2937',
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
            })}
         >
            <Tab.Screen
               name="Home"
               component={HomeScreen}
               options={{
                  header: () => <Header />,
                  tabBarIcon: ({ color, focused }) => (
                     <Icon color={color} focused={focused} name="home" />
                  ),
               }}
            />
            <Tab.Screen
               name="Search"
               component={Search}
               options={{
                  header: () => <Header />,
                  tabBarIcon: ({ color, focused }) => (
                     <Icon color={color} focused={focused} name="search" />
                  ),
               }}
            />
            <Tab.Screen
               name="Signin"
               component={SignInSignUpScreen}
               options={{
                  header: () => <Header />,
                  tabBarIcon: ({ color, focused }) => (
                     <Icon color={color} focused={focused} name="settings" />
                  ),
               }}
            />
         </Tab.Navigator>
      </NavigationContainer>
   )
}

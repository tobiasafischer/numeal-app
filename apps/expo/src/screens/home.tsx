import React from 'react'

import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAuth } from '@clerk/clerk-expo'
import { SafeAreaView } from 'react-native-safe-area-context'

import { trpc } from '../utils/trpc'
import { Card, Story } from '../components'

export const HomeScreen = () => {
   const postQuery = trpc.post.all.useQuery()

   return (
      <SafeAreaView className="h-full w-full flex-1 bg-[#1f2937]">
         <Story />
         <View className="mt-10">
            <Card
               title="Pizza"
               content="pizza party"
               imageSource="https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/Pepperoni-Pizza-1-190x190.jpg"
            />
         </View>
      </SafeAreaView>
   )
}

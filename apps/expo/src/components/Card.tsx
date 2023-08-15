import React from 'react'
import { View, Text, Image } from 'react-native'

interface CardProps {
   title: string
   content: string
   imageSource: string
}

export const Card: React.FC<CardProps> = ({ title, content, imageSource }) => {
   return (
      <View className="m-4 my-4 rounded-lg bg-slate-100 p-4 shadow-md">
         <Text className="mb-2 text-lg font-bold text-slate-700">{title}</Text>
         {imageSource && (
            <Image source={{ uri: imageSource }} className="mb-2 h-40 w-full rounded-md" />
         )}
         <Text className="text-base">{content}</Text>
      </View>
   )
}

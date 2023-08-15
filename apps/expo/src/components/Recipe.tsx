import React from 'react'
import { View, Text } from 'react-native'

interface RecipeCardProps {
   recipe: any // Accept any JSON structure for recipes
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
   const renderDetails = () => {
      const details = []

      for (const key in recipe) {
         if (Array.isArray(recipe[key])) {
            // Render arrays (like ingredients and macros)
            const items = recipe[key].map((item: any, index: React.Key | null | undefined) => (
               <Text key={index} style={{ marginLeft: 5 }}>
                  {JSON.stringify(item)} {/* You can format this according to your needs */}
               </Text>
            ))
            details.push(
               <View key={key}>
                  <Text style={{ fontWeight: 'bold' }}>{key}:</Text>
                  <View style={{ marginLeft: 10 }}>{items}</View>
               </View>,
            )
         } else if (typeof recipe[key] === 'string' || typeof recipe[key] === 'number') {
            // Render strings and numbers
            details.push(
               <View key={key}>
                  <Text style={{ fontWeight: 'bold' }}>{key}:</Text>
                  <Text style={{ marginLeft: 5 }}>{JSON.stringify(recipe[key])}</Text>
               </View>,
            )
         }
      }

      return details
   }

   return (
      <View
         style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
         }}
      >
         <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>
            Formatted Recipe
         </Text>
         {renderDetails()}
      </View>
   )
}

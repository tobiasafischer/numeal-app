import React, { useState } from 'react'
import { Button, Text, View, ScrollView } from 'react-native'
import cheerio from 'cheerio'
import * as Clipboard from 'expo-clipboard'
import { RecipeCard } from '../components'
import * as jsonld from 'jsonld'

export const Search: React.FC = () => {
   const [formattedRecipe, setFormattedRecipe] = useState<any>('')
   const [pastedString, setPastedString] = useState<string>('')

   interface RecipeJsonLd {
      '@context': string
      '@type': 'Recipe'
      '@graph': any[]
      // Define other properties specific to your use case
   }

   const extractRecipeFromJsonLd = (data: any): RecipeJsonLd | null => {
      if (data['@type'] === 'Recipe') {
         return data as RecipeJsonLd
      }

      if (data['@graph'] instanceof Array) {
         for (const item of data['@graph']) {
            const result = extractRecipeFromJsonLd(item)
            if (result) {
               return result
            }
         }
      }

      for (const key in data) {
         if (typeof data[key] === 'object') {
            const result = extractRecipeFromJsonLd(data[key])
            if (result) {
               return result
            }
         }
      }

      return null
   }

   const extractJsonLdDataFromHtml = async (html: string): Promise<RecipeJsonLd[]> => {
      const $ = cheerio.load(html)
      const recipeJsonLdData: RecipeJsonLd[] = []

      $('script[type="application/ld+json"]').each((index, element) => {
         const jsonLdString = $(element).html()?.trim() ?? ''
         try {
            const jsonLdObject = JSON.parse(jsonLdString)
            const recipeObject = extractRecipeFromJsonLd(jsonLdObject)

            if (recipeObject) {
               recipeJsonLdData.push(recipeObject)
            }
         } catch (error) {
            console.error('Error parsing JSON-LD:', error)
         }
      })
      console.log(JSON.stringify(recipeJsonLdData))
      return recipeJsonLdData
   }

   const handleFormatRecipe = async () => {
      const recipeInput = await Clipboard.getStringAsync()
      setPastedString(recipeInput)
      const html = await fetch(recipeInput).then((response) => response.text())

      const jsonLdData: any = await extractJsonLdDataFromHtml(html)
      setFormattedRecipe(jsonLdData[0])

      // Process the extracted JSON-LD data as needed
      // ...
   }

   return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
         {!formattedRecipe && <Button onPress={handleFormatRecipe} title="Paste Recipe" />}
         <View style={{ marginTop: 16, paddingBottom: 90 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Formatted Recipe:</Text>
            {pastedString && (
               <Text style={{ color: 'white', fontWeight: 'bold' }}>{pastedString}</Text>
            )}
            {formattedRecipe && <RecipeCard recipe={formattedRecipe} />}
            {formattedRecipe && (
               <Button
                  onPress={() => {
                     setFormattedRecipe('')
                     setPastedString('')
                  }}
                  title="Clear"
               />
            )}
         </View>
      </ScrollView>
   )
}

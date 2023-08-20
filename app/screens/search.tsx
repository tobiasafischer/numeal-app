import React, { useState } from 'react'
import { Button, Text, View, ScrollView } from 'react-native'
import * as Clipboard from 'expo-clipboard'
import { RecipeCard, RecipeProps } from '../components'

export const Search: React.FC = () => {
	const [formattedRecipe, setFormattedRecipe] = useState<any>('')
	const [pastedString, setPastedString] = useState<string>('')

	const handleFormatRecipe = async () => {
		const recipeInput = 'https://www.thekitchn.com/cincinnati-chili-recipe-23565738' //await Clipboard.getStringAsync()
		setPastedString(recipeInput)

		fetch(`http://192.168.1.212:5000/scrape?url=${encodeURIComponent(recipeInput)}`)
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error('Failed to fetch recipe data')
				}
			})
			.then((data) => {
				setFormattedRecipe(data)
			})
			.catch((error) => {
				console.error('An error occurred:', error)
			})
	}

	return (
		<ScrollView contentContainerStyle={{ padding: 8, backgroundColor: 'transparent' }}>
			{!formattedRecipe && <Button onPress={handleFormatRecipe} title='Paste Recipe' />}
			<View style={{ marginTop: 16, paddingBottom: 90 }}>
				<Text style={{ color: '#333', fontWeight: 'bold' }}>Formatted Recipe:</Text>
				{pastedString && (
					<Text style={{ color: '#333', fontWeight: 'bold' }}>{pastedString}</Text>
				)}
				{formattedRecipe && <RecipeCard recipe={formattedRecipe} />}

				<Button
					onPress={() => {
						setFormattedRecipe('')
						setPastedString('')
					}}
					title='Clear'
				/>
			</View>
		</ScrollView>
	)
}

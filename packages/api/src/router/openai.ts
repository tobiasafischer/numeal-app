import { router, publicProcedure } from '../trpc'
import { z } from 'zod'
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HUGGING_FACE_API_TOKEN)

export const openAiRouter = router({
   formatRecipe: publicProcedure.input(z.string()).mutation(async ({ input }) => {
      const recipeText = input

      try {
         // Call the Hugging Face API here and format the recipe
         const formattedRecipe = await formatRecipeWithHuggingFace(recipeText)

         return { formattedRecipe }
      } catch (error) {
         // Handle any errors here
         throw new Error(JSON.stringify(error, null, 2))
      }
   }),
})

async function formatRecipeWithHuggingFace(recipeText: string): Promise<string> {
   const model = 'mbien/recipenlg' // Choose a suitable model from Hugging Face

   try {
      // Call the Hugging Face model to format the recipe
      const response = await hf.textGeneration({
         model,
         inputs: `Convert the provided recipe to JSON: {author: string, prepTime: string, cookTime: string, totalTime: string, ingredients: [{name: string, amount: number (optional), units: string}], directions: string, calories: number, macros: [{name: string, amount: number, unit: string}], labels: string[] (e.g., keto, carnivore, vegan, vegetarian)} here is the recipe:\n${recipeText}`,
      })
      console.log(response)

      return response.generated_text
   } catch (error) {
      // Handle API errors here
      console.log('error', JSON.stringify(error, null, 2))
      throw new Error(JSON.stringify(error, null, 2))
   }
}

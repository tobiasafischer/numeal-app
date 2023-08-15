import { router } from '../trpc'
import { postRouter } from './post' // Your existing post router
import { authRouter } from './auth' // Your existing auth router
import { openAiRouter } from './openai' // The OpenAI router you just created

export const appRouter = router({
   post: postRouter,
   auth: authRouter,
   openai: openAiRouter, // Add the OpenAI router here
   // ... other routers ...
})

// export type definition of API
export type AppRouter = typeof appRouter

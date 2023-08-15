import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TRPCProvider } from './utils/trpc'

import { SignInSignUpScreen } from './screens/signin'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { tokenCache } from './utils/cache'
import Constants from 'expo-constants'
import { Navigation } from './Navigation'

export const App = () => {
   return (
      <ClerkProvider
         publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
         tokenCache={tokenCache}
      >
         <SignedIn>
            <TRPCProvider>
               <SafeAreaProvider>
                  <Navigation />
                  <StatusBar />
               </SafeAreaProvider>
            </TRPCProvider>
         </SignedIn>
         <SignedOut>
            <SignInSignUpScreen />
         </SignedOut>
      </ClerkProvider>
   )
}

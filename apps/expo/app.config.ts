import { ExpoConfig, ConfigContext } from '@expo/config'

const CLERK_PUBLISHABLE_KEY = 'pk_test_Z2xvcmlvdXMtc3dpZnQtMzAuY2xlcmsuYWNjb3VudHMuZGV2JA'

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
   name: 'expo',
   slug: 'expo',
   version: '1.0.0',
   orientation: 'portrait',
   icon: './assets/icon.png',
   userInterfaceStyle: 'dark',
   backgroundColor: '#1e293b',
   splash: {
      image: './assets/icon.png',
      resizeMode: 'contain',
      backgroundColor: '#1e293b',
   },
   updates: {
      fallbackToCacheTimeout: 0,
   },
   assetBundlePatterns: ['**/*'],
   ios: {
      supportsTablet: true,
      bundleIdentifier: 'your.bundle.identifier',
   },
   android: {
      adaptiveIcon: {
         foregroundImage: './assets/icon.png',
         backgroundColor: '#2e026d',
      },
   },
   extra: {
      eas: {
         projectId: 'your-project-id',
      },
      CLERK_PUBLISHABLE_KEY,
   },
   plugins: ['./expo-plugins/with-modify-gradle.js'],
})

export default defineConfig

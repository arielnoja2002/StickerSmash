// Root layout component for the application
// Sets up the navigation stack and status bar styling
import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

/**
 * RootLayout component - Main layout wrapper for the entire app
 * Configures the Stack navigator with hidden headers and sets light status bar styling
 */
export default function RootLayout() {
  return (
    <>
      {/* Stack navigator with hidden headers for cleaner UI */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* Tab navigation screen - contains Home and About tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      {/* Light status bar for better visibility on dark background */}
      <StatusBar style="light" />
    </>
  );
}

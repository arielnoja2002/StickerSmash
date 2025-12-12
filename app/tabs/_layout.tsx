// Tab navigation layout component
// Creates a bottom tab navigator with Home and About tabs
import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

/**
 * TabLayout component - Sets up bottom tab navigation
 * Provides two main navigation tabs: Home and About
 * Uses dark theme with yellow accent color (#ffd33d)
 */
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        // Active tab color (yellow)
        tabBarActiveTintColor: '#ffd33d',
        // Dark header background
        headerStyle: {
        backgroundColor: '#25292e',
        },
        // Remove header shadow
        headerShadowVisible: false,
        // White header text
        headerTintColor: '#fff',
        // Dark tab bar background
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
    }}
    >

      {/* Home tab - Main sticker smash feature */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // Dynamic icon: filled when focused, outline when not
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      {/* About tab - Information about the app */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          // Dynamic icon: filled when focused, outline when not
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}

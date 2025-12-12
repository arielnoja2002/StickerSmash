// 404 Not Found error screen component
import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

/**
 * NotFoundScreen component - Displays when user navigates to undefined route
 * Provides a link to navigate back to the home screen
 */
export default function NotFoundScreen() {
  return (
    <>
      {/* Screen header configuration */}
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      {/* Container with centered navigation link */}
      <View style={styles.container}>
        {/* Link to return to home/tabs screen */}
        <Link href="/tabs" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

// Component styles
const styles = StyleSheet.create({
  // Full-screen centered container
  container: {
    flex: 1,
    backgroundColor: '#25292e', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Link button styling
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

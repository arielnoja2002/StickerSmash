// About screen component
import { StyleSheet, Text, View } from 'react-native';

/**
 * AboutScreen component - Simple about page
 * Displays application information
 * Uses dark background theme consistent with the app
 */
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
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
  // White text color
  text: {
    color: '#fff',
  },
});

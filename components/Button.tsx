// Button component with optional primary theme variant
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';

/**
 * Props for Button component
 * @param label - Text displayed on the button
 * @param theme - Optional theme ('primary' for styled variant)
 * @param onPress - Callback function when button is pressed
 */
type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

/**
 * Button component - Reusable button with optional primary theme
 * Primary theme displays with white background, yellow border, and picture icon
 * Default theme displays with dark background and white text
 */
export default function Button({ label, theme, onPress }: Props) {
  // Render primary theme variant with special styling
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        {/* Primary button with white background and yellow border */}
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          {/* Picture icon for picking images */}
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          {/* Button label */}
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  // Default button theme
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

// Component styles
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

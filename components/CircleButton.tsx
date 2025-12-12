// Circle button component with add icon
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, View } from 'react-native';

/**
 * Props for CircleButton component
 * @param onPress - Callback function when button is pressed
 */
type Props = {
  onPress: () => void;
};

/**
 * CircleButton component - Large circular button with add icon
 * Used for adding stickers to the image
 * Features yellow border and white background
 */
export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      {/* Pressable circle containing add icon */}
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

// Component styles
const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});

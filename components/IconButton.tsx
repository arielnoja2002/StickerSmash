// Icon button component with label
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, Text } from 'react-native';

/**
 * Props for IconButton component
 * @param icon - Material icon name to display
 * @param label - Text label displayed below the icon
 * @param onPress - Callback function when button is pressed
 */
type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

/**
 * IconButton component - Button combining icon and text label
 * Used for action buttons like Save and Reset
 * Displays icon above text label in vertical layout
 */
export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      {/* Material icon */}
      <MaterialIcons name={icon} size={24} color="#fff" />
      {/* Label text below icon */}
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

// Component styles
const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});

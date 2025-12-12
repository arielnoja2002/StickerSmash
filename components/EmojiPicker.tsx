// Emoji/sticker picker modal component
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

/**
 * Props for EmojiPicker component
 * @param isVisible - Controls whether the modal is shown
 * @param children - Content to display inside the modal (emoji list)
 * @param onClose - Callback function when close button is pressed
 */
type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

/**
 * EmojiPicker component - Modal for selecting emoji stickers
 * Slides up from the bottom of the screen
 * Contains a title, close button, and emoji list
 */
export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
    {/* Slide-up modal containing emoji picker */}
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        {/* Modal header with title and close button */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          {/* Close button */}
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {/* Emoji list content */}
        {children}
      </View>
    </Modal>
    </View>
  );
}

// Component styles
const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

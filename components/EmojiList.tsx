// Emoji/sticker list component for horizontal scrolling selection
import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from 'react-native';

/**
 * Props for EmojiList component
 * @param onSelect - Callback function when an emoji is selected
 * @param onCloseModal - Callback function to close the emoji picker modal
 */
type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

/**
 * EmojiList component - Horizontally scrollable list of emoji stickers
 * Users can tap an emoji to select it and add it to the image
 * Features 6 emoji stickers from the assets
 */
export default function EmojiList({ onSelect, onCloseModal }: Props) {
  // Array of available emoji sticker images
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      // Horizontal scrolling layout
      horizontal
      // Show scroll indicator only on web
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      // Emoji data
      data={emoji}
      contentContainerStyle={styles.listContainer}
      // Render each emoji as a pressable image
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            // Select emoji and close modal
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

// Component styles
const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

// Image viewer component for displaying selected or placeholder images
import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

/**
 * Props for ImageViewer component
 * @param imgSource - Placeholder image source to display by default
 * @param selectedImage - Optional URI of user-selected image
 */
type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

/**
 * ImageViewer component - Displays either a user-selected image or placeholder
 * Shows the selected image if available, otherwise displays the placeholder
 * Used as the canvas for adding emoji stickers
 */
export default function ImageViewer({ imgSource, selectedImage }: Props) {
  // Use selected image URI if available, otherwise use placeholder
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

// Component styles
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

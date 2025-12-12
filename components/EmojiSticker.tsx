// Animated emoji sticker component with dragging and scaling gestures
import { ImageSourcePropType } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

/**
 * Props for EmojiSticker component
 * @param imageSize - Initial size of the sticker
 * @param stickerSource - Image source of the emoji sticker
 */
type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

/**
 * EmojiSticker component - Interactive animated emoji sticker
 * Features:
 * - Drag with one finger to move around the image
 * - Double tap to toggle between normal and 2x size
 * - Smooth spring animations for scaling
 */
export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  // Shared values for animations
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Double-tap gesture for scaling the emoji up/down
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      // Toggle between normal and 2x size
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  // Animated style for scaling with spring effect
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  // Pan gesture for dragging the emoji
  const drag = Gesture.Pan().onChange(event => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  // Animated style for position translation
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    // Gesture detector for dragging the entire sticker
    <GestureDetector gesture={drag}>
      {/* Animated container for position */}
      <Animated.View style={[containerStyle, { top: -350 }]}>
        {/* Gesture detector for double-tap scaling */}
        <GestureDetector gesture={doubleTap}>
          {/* Animated emoji image */}
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}

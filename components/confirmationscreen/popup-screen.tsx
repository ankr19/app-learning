import React, { useEffect } from "react";
import { View, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Card, Text, Button } from "react-native-paper";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedView = Animated.createAnimatedComponent(View);

export default function Popup({
  visible,
  title = "Are you sure?",
  message = "Do you want to continue?",
  onConfirm,
  onCancel,
}) {
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      scale.value = withTiming(1, { duration: 200 });
      opacity.value = withTiming(1, { duration: 150 });
    } else {
      scale.value = withTiming(0.5, { duration: 200 });
      opacity.value = withTiming(0, { duration: 150 });
    }
  }, [visible]);

  const popupAnim = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  if (!visible) return null;

  return (
    <AnimatedPressable
      className="absolute inset-0 bg-black/50 items-center justify-center"
      style={popupAnim}
      onPress={onCancel}
    >
      <AnimatedView
        className="w-80"
        onStartShouldSetResponder={() => true}
      >
        <Card>
          <Card.Title title={title} />
          <Card.Content>
            <Text>{message}</Text>
          </Card.Content>

          <Card.Actions className="flex-row justify-end mt-2">
            <Button onPress={onCancel}>Cancel</Button>
            <Button mode="contained" onPress={onConfirm}>
              Confirm
            </Button>
          </Card.Actions>
        </Card>
      </AnimatedView>
    </AnimatedPressable>
  );
}

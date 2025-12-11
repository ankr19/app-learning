import React, { useEffect } from "react";
import { Pressable } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Card, Text, Button } from "react-native-paper";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedCard = Animated.createAnimatedComponent(Card);

export default function Popup({
  visible,
  title = "Confirmation",
  message = "Do you want to proceed?",
  icon = null,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  dismissOnBackdropPress = true,
}) {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 200 });
      scale.value = withSpring(1, { damping: 12 });
    } else {
      opacity.value = withTiming(0, { duration: 180 });
      scale.value = withTiming(0.8, { duration: 180 });
    }
  }, [visible]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const popupStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  if (!visible) return null;

  return (
    <AnimatedPressable
      className="absolute inset-0 bg-black/50 items-center justify-center"
      style={backdropStyle}
      onPress={() => dismissOnBackdropPress && onCancel?.()}
    >
      <AnimatedCard
        className="w-80 p-2 rounded-2xl"
        style={popupStyle}
        onStartShouldSetResponder={() => true}
        elevation={4}
      >
        {icon && (
          <Card.Title
            title={title}
            left={() => icon}
            titleStyle={{ fontSize: 18 }}
          />
        )}

        {!icon && <Card.Title title={title} titleStyle={{ fontSize: 18 }} />}

        <Card.Content className="mt-1 mb-3">
          <Text>{message}</Text>
        </Card.Content>

        <Card.Actions className="flex-row justify-end gap-2">
          <Button onPress={onCancel}>{cancelLabel}</Button>
          <Button
            mode="contained"
            onPress={onConfirm}
            buttonColor="#2563eb"
            textColor="#fff"
          >
            {confirmLabel}
          </Button>
        </Card.Actions>
      </AnimatedCard>
    </AnimatedPressable>
  );
}

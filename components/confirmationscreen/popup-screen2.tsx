import { View, Text, Modal, Dimensions, Platform } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

interface PopScreen {
  visible?: boolean
  message?: string
}

const { width } = Dimensions.get("window")
export default function PopScreen2({ visible,
  title = "Confirmation",
  message = "Do you want to proceed?",
  icon = null,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  dismissOnBackdropPress = true, }) {
  return (
    <Modal visible={visible} transparent animationType='fade'>
      <View className='flex-1 bg-black/60 justify-center items-center'>
        {Platform.OS === 'web' ? ("") :
          (
            <View className='bg-white rounded-md w-80'>
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
            </View>
          )}
      </View>
    </Modal>
  )
}
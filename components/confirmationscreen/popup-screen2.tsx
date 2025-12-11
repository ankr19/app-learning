import { View, Text, Modal, Dimensions, Platform } from 'react-native'
import React from 'react'

interface PopScreen {
  visible?: boolean
  message?: string
}

const { width } = Dimensions.get("window")
export default function PopScreen2({ visible = true, message, }: PopScreen) {
  return (
    <Modal visible={visible} transparent animationType='fade'>
      <View className='flex-1 bg-black/60 bg-opacity-45 justify-center items-center'>
        {Platform.OS === 'web' ? ("") : 
        (
          <View className='w-80 rounded-2xl'>
            
          </View>
        )}
        <Text></Text>
      </View>
    </Modal>
  )
}
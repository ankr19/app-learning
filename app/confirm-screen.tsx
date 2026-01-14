import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'

export default function ConfirmScreen() {
  return (
    <SafeAreaView className='bg-green-500 flex-1 justify-center items-center'>
      <View className='flex items-center'>
        <View className='bg-gray-100 rounded-full'>
          <LottieView
            source={require('../assets/confirmscreen.json')}
            loop={true}
            autoPlay
            speed={1}
            style={{ width: 200, height: 200 }}
            resizeMode="cover"
          />
        </View>
        <View className='mt-10'>
          <Text className='text-white font-semibold '>ConfirmScreen</Text>
        </View>
      </View>
    </SafeAreaView>
  )
} 
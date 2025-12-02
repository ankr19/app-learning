import LottieView from 'lottie-react-native'
import React from 'react'
import { Dimensions, Modal, Platform, StyleSheet, Text, View } from 'react-native'

interface LoadingScreenProps{
  visible?: boolean
  message?: string
  loop?: boolean
  speed?: number
}

const { width } = Dimensions.get('window')

export default function LoadingScreen({
  visible = true,
  message,
  loop = true,
  speed = 1,
}: LoadingScreenProps) {
  if (!visible) return null

  // Use a modal so the loading screen sits above everything else
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className='flex-1 bg-black/60 bg-opacity-45 justify-center items-center'>
        <View className={`w-[${[Math.min(320, width - 48)]}px] bg-white p-6 rounded-xl justify-center items-center`} pointerEvents="none">
          {Platform.OS === 'web' ? (
            // Lottie on web in this project may not be supported; show simple text fallback
            <Text style={styles.message}>{message ?? 'Loading...'}</Text>
          ) : (
            <LottieView
              source={require('../../assets/loadingscreen.json')}
              autoPlay
              loop={loop}
              speed={speed}
              style={styles.lottie}
              resizeMode="cover"
            />
          )}

          {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: Math.min(320, width - 48),
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 150,
    height: 100,
  },
  message: {
    marginTop: 12,
    fontSize: 16,
    color: '#111',
    textAlign: 'center',
  },
})
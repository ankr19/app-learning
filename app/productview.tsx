import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-paper'
// import { Image } from 'expo-image'

export default function ProductView() {
    let productdata = [{
        id: "prod_001",
        name: "Even Better Clinical Foundation Cream",
        brand: "CLINIQUE",
        image: require('../assets/images/product1.jpg'),
        price: 38.4,
        originalPrice: 50,
    },]
    return (
        <SafeAreaView className='flex-1 bg-gray-100'>
           <View className="flex-row gap-4 mb-6 h-48">
  {/* LEFT IMAGE */}
  <Image
    source={productdata[0].image}
    className="w-36 h-48 bg-gray-100 rounded-xl"
    resizeMode="contain"
  />

  {/* RIGHT CONTENT */}
  <View className="flex-1 justify-between py-2">
    {/* TOP */}
    <View>
      <Text className="font-semibold text-base">
        {productdata[0].name}
      </Text>
      <Text className="text-gray-500 text-xs mt-1">
        {productdata[0].brand}
      </Text>
      <Pressable
        onPress={() => console.log("Remove item")}
        className="absolute top-0 right-0 p-1 bg-black"
      >
        <Text className="text-lg font-semibold text-gray-500">✕</Text>
      </Pressable>
    </View>

    {/* BOTTOM */}
    <View className="flex-row justify-between items-center">
      <Text className="font-semibold text-base">
        ${productdata[0].price}
      </Text>

      <View className="flex-row items-center border rounded-lg">
        <Pressable className="px-3 py-1">
          <Text>-</Text>
        </Pressable>

        <Text className="px-2">0</Text>

        <Pressable className="px-3 py-1">
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  </View>
</View>

        </SafeAreaView>
    )
}
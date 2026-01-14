import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { TextInput, Button, IconButton, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Custom Colors based on the image
  const THEME_BLUE = '#9FB4D8'; 
  const BG_GRAY = '#EBEBF0';

  return (
    <View className="flex-1" style={{ backgroundColor: BG_GRAY }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* --- Top Blue Background Section --- */}
      <View 
        className="absolute top-0 w-full h-[45%]" 
        style={{ backgroundColor: THEME_BLUE }} 
      />

      <SafeAreaView className="flex-1">
        {/* --- Header: Back Button --- */}
        {/* <View className="px-2 pt-2">
          <IconButton 
            icon="chevron-left" 
            iconColor="white" 
            size={32} 
            onPress={() => console.log('Back pressed')} 
          />
        </View> */}

        {/* --- Main Content Container --- */}
        <View className="flex-1 items-center justify-center -mt-12">
          
          {/* --- Avatar (Floating above card) --- */}
          <View className="bg-white p-1 rounded-full mb-6 shadow-sm z-10">
            <View className="bg-gray-200 rounded-full overflow-hidden">
               {/* Using an icon as a placeholder for the silhouette */}
               <Avatar.Icon 
                 size={100} 
                 icon="account" 
                 color="white" 
                 style={{ backgroundColor: THEME_BLUE }} 
               />
            </View>
          </View>

          {/* --- The Login Card --- */}
          <View className="bg-white w-[85%] pt-10 pb-10 px-8 shadow-xl" style={{ borderRadius: 4 }}>
            
            {/* Title */}
            <Text className="text-center text-2xl font-bold text-gray-800 mb-10 tracking-wider">
              WELCOME
            </Text>

            {/* Email Input */}
            <View className="mb-6">
              <Text style={{ color: THEME_BLUE }} className="text-xs font-bold mb-1 ml-1 uppercase">
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                mode="flat"
                dense={true}
                textColor="#333"
                placeholder="emma.james4@mail.com"
                placeholderTextColor="#9ca3af"
                underlineColor="#E0E0E0"
                activeUnderlineColor={THEME_BLUE}
                style={{ backgroundColor: 'transparent', paddingHorizontal: 0, height: 30, fontSize: 14 }}
                contentStyle={{ paddingLeft: 0 }}
              />
            </View>

            {/* Password Input */}
            <View className="mb-10">
              <Text style={{ color: THEME_BLUE }} className="text-xs font-bold mb-1 ml-1 uppercase">
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                mode="flat"
                dense={true}
                textColor="#333"
                placeholder="**********"
                placeholderTextColor="#9ca3af"
                underlineColor="#E0E0E0"
                activeUnderlineColor={THEME_BLUE}
                style={{ backgroundColor: 'transparent', paddingHorizontal: 0, height: 30, fontSize: 14 }}
                contentStyle={{ paddingLeft: 0 }}
                // Optional: Eye icon toggle
                right={
                  <TextInput.Icon 
                    icon={showPassword ? "eye-off" : "eye"} 
                    size={18}
                    color="#ccc"
                    onPress={() => setShowPassword(!showPassword)} 
                  />
                }
              />
            </View>

            {/* Login Button */}
            <View className='flex gap-3'>
            <Button
              mode="contained"
              onPress={() => console.log('Login pressed')}
              style={{ backgroundColor: THEME_BLUE, borderRadius: 2 }}
              contentStyle={{ height: 48 }}
              labelStyle={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}
              >
              LOGIN
            </Button>
            <Button mode='contained' onPress={() => console.log('Sign up pressed')} style={{ backgroundColor: 'transparent', borderRadius: 2, borderWidth: 1, borderColor: THEME_BLUE }} contentStyle={{ height: 48 }} labelStyle={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1, color: THEME_BLUE }}>
              SIGN UP
            </Button>
              </View>
          </View>

          {/* --- Footer Link --- */}
          {/* <TouchableOpacity className="mt-8">
            <Text className="text-gray-500 text-sm font-medium">
              Forgot password?
            </Text>
          </TouchableOpacity> */}

        </View>
      </SafeAreaView>
    </View>
  );
}
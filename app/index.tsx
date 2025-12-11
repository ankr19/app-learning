import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper';
import Popup from '../components/confirmationscreen/popup-screen';
import ConfirmationScreen from '@/components/confirmationscreen/confirm-screen';
import LoadingScreen from '@/components/confirmationscreen/loading-screen';
import { router } from 'expo-router';
import { AudioModule, useAudioPlayer } from 'expo-audio';

export default function HomeScreen2() {
    const player = useAudioPlayer(require('../assets/beep.mp3'));
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const handlePlaying = ()=>{
        player.seekTo(0);
        player.play();
    }
    return (
        <SafeAreaView className='bg-pink-50 flex-1 gap-3 '>
            {/* <Text>index</Text> */}
            <Button mode="contained" onPress={() => setShowPopup(true)}>
                Delete Item
            </Button>

            <Popup
                visible={showPopup}
                title="Delete item?"
                message="This action cannot be undone."
                onConfirm={() => {
                    setShowPopup(false);
                    console.log("Confirmed!");
                }}
                onCancel={() => setShowPopup(false)}
            />

            <Button mode='outlined' onPress={() => { router.push('/login') }}>Login</Button>
            {/* <ConfirmationScreen message='Data is Correct.' /> */}
            {/* <LoadingScreen message='' /> */}
            {/* <LoadingScreen /> */}
            <Button mode='outlined' onPress={()=>{handlePlaying()}}>Player</Button>
        </SafeAreaView>
    )
}
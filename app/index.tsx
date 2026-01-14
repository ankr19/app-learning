import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper';
import Popup from '../components/confirmationscreen/popup-screen';
import ConfirmationScreen from '@/components/confirmationscreen/confirm-screen';
import LoadingScreen from '@/components/confirmationscreen/loading-screen';
import { router } from 'expo-router';
import { AudioModule, useAudioPlayer } from 'expo-audio';
import PopScreen2 from '@/components/confirmationscreen/popup-screen2';
import PopupScreenConfirm from '@/components/confirmationscreen/popup-confirmscreen';

export default function HomeScreen2() {
    const player = useAudioPlayer(require('../assets/beep.mp3'));
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const handlePlaying = () => {
        player.seekTo(0);
        player.play();
    }
    const [loading, setloading] = useState<boolean>(false);
    const [popup, setpopup] = useState<boolean>(false);


    React.useEffect(() => {
        const internal = setInterval(() => {
            setloading(true);
        }, 5000);
    }, [])
    return (
        <SafeAreaView className='bg-blue-50 flex-1'>
            <View className='flex-1 gap-3 m-3'>
            {/* <Text>index</Text> */}
            <Button mode="contained" onPress={() => setShowPopup(true)}>
                Delete Item
            </Button>

            {/* <Popup
                visible={showPopup}
                title="Delete item?"
                message="This action cannot be undone."
                onConfirm={() => {
                    setShowPopup(false);
                    console.log("Confirmed!");
                }}
                onCancel={() => setShowPopup(false)}
            /> */}

            <PopScreen2 visible={showPopup}
                title="Delete item?"
                message="This action cannot be undone."
                onConfirm={() => {
                    setShowPopup(false);
                    console.log("Confirmed!");
                }}
                onCancel={() => setShowPopup(false)} />
            
            <PopupScreenConfirm visible={popup} title={'Data is matched'}  onCancel={()=>{setpopup(false)}} onConfirm={()=>{setpopup(false)}} />

            <Button mode='outlined' onPress={() => { router.push('/login') }}>Login</Button>
            {/* <ConfirmationScreen message='Data is Correct.' /> */}
            {/* <LoadingScreen message='' /> */}
            {/* <LoadingScreen /> */}
            <Button mode='outlined' onPress={() => { router.push('/hapticcheck') }}>Move to Heptic Check</Button>
            <Button mode='outlined' onPress={() => { handlePlaying() }}>Player</Button>
            <Button mode="contained" onPress={() => { setpopup(true) }}>Pop Up Confirmation</Button>
            <Button mode="contained" onPress={() => { router.push('/confirm-screen') }}>Confirmation Screen</Button>
            <Button mode="contained" onPress={() => { router.push('/productview') }}>Product Screen</Button>

            </View>
        </SafeAreaView>
    )
}
import { View, Text, Modal } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

export default function PopupScreenConfirm({
    visible = true,
    title = "Do you want to proceed?",
    icon = null,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    onConfirm,
    onCancel,
}) {
    return (
        <Modal visible={visible} transparent animationType='fade'>
            <View className='flex-1 bg-black/40 justify-center items-center '>
                <View className='bg-white rounded-md w-80 justify-center items-center p-3'>
                    {icon && (
                        <Card.Title
                            title={title}
                            left={() => icon}
                            titleStyle={{ fontSize: 18, textAlign:'center' }}
                        />
                    )}
                    {!icon && <Card.Title title={title} titleStyle={{ fontSize: 18, textAlign:'center' }} />}
                    <Card.Content className="mt-1 mb-3">
                     <Text>QR String is Matched</Text>    
                    </Card.Content>
                    <Card.Actions className=""> 
                        <Button
                            icon={require('../../assets/images/check.png')}
                            mode="contained"
                            onPress={onConfirm}
                            buttonColor="#2563eb"
                            textColor="#fff"
                        >
                            {confirmLabel}
                        </Button>
                    </Card.Actions>
                </View>
            </View>
        </Modal>
    )
}
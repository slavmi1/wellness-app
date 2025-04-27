import React, { useEffect } from 'react';
import { regStyles, logInStyles } from '@/styles/styles';
import { setNavigationBarColor } from './utils/navigationBar';
import { ImageBackground, Pressable, StatusBar, Text, TextInput, View } from 'react-native';

export default function RegistrationLog() {
    useEffect(() => {
            setNavigationBarColor('#E1E1E1');
        });
        return (
            <ImageBackground 
                source={require('../assets/images/Registration/sign_background.jpg')} 
                style={regStyles.background}
            >
                <StatusBar backgroundColor={'#E1E1E1'}/>
                <View style={regStyles.container}>
                    <Text style={regStyles.text}>TIME FOR RUNNING!</Text>
                    <Text style={{height: 35}}></Text>
                    <Text style={[regStyles.text, {marginBottom: 35}]}>Welcome back, hero</Text>
                    <TextInput 
                        placeholder='Name' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={logInStyles.input}
                    />
                    <TextInput 
                        placeholder='Password' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={[logInStyles.input, {marginBottom: 5}]}
                        secureTextEntry={true}
                    />
                    <View style={{width: '100%', paddingLeft: 15, marginBottom: 40}}>
                        <Pressable
                            onPress={() => console.log('Восстановить пароль.')}
                        >
                            {({ pressed }) => (
                                <Text style={[logInStyles.forgotButton, { opacity: pressed ? 0.8 : 1 }]}>Forgot password</Text>
                            )}
                        </Pressable>
                    </View>
                    <Pressable 
                        onPress={() => console.log('Регистрация.')}
                        style={regStyles.signButton}
                    >
                        {({ pressed }) => (
                            <Text style={[regStyles.text, { opacity: pressed ? 0.8 : 1 }]}>Log in</Text>
                        )}
                    </Pressable>
                </View>
            </ImageBackground>
        );
}
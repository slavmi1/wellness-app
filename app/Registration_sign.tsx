import React, { useEffect, useState } from 'react';
import { regStyles } from '@/styles/styles';
import { setNavigationBarColor } from './utils/navigationBar';
import { ImageBackground, Pressable, StatusBar, Text, TextInput, View } from 'react-native';

export default function RegistrationSign() {
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
                    <Text style={{height: 20}}></Text>
                    <Text style={[regStyles.text, {marginBottom: 20}]}>Sign and start your journey today</Text>
                    <TextInput 
                        placeholder='Name' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
                    />
                    <TextInput 
                        placeholder='Date of birth' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
                    />
                    <TextInput 
                        placeholder='Password' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
                        secureTextEntry={true}
                    />
                    <TextInput 
                        placeholder='Repeat your password' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
                    />
                    <Pressable 
                        onPress={() => console.log('Регистрация.')}
                        style={regStyles.signButton}
                    >
                        {({ pressed }) => (
                            <Text style={[regStyles.text, { opacity: pressed ? 0.8 : 1 }]}>Sign</Text>
                        )}
                    </Pressable>
                    <Pressable
                       onPress={() => console.log('Авторизироваться.')}
                    >
                    {({ pressed }) => (
                        <Text style={[regStyles.logInText, { opacity: pressed ? 0.8 : 1 }]}>Log in</Text>
                    )}
                    </Pressable>
                </View>
            </ImageBackground>
        );
}
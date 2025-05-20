import React, { useEffect } from 'react';
import { regStyles, logInStyles } from '@/styles/styles';
import { setNavigationBarColor } from './utils/navigationBar';
import { ImageBackground, Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useLanguage } from './utils/LanguageContext';

export default function RegistrationLog() {
    const { t } = useLanguage();
    
    useEffect(() => {
        setNavigationBarColor('#E1E1E1');
    });
        
    const router = useRouter();
    return (
        <ImageBackground 
            source={require('../assets/images/Registration/sign_background.jpg')} 
            style={regStyles.background}
        >
            <StatusBar backgroundColor={'#E1E1E1'}/>
            <View style={[regStyles.container, {top: '35%'}]}>
                <Text style={regStyles.text}>{t('time_for_running')}</Text>
                <Text style={[regStyles.text, {marginTop: 15, marginBottom: 24}]}>{t('welcome_back')}</Text>
                <TextInput 
                    placeholder={t('name')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={logInStyles.input}
                />
                <TextInput 
                    placeholder={t('password')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={[logInStyles.input, {marginBottom: 5}]}
                    secureTextEntry={true}
                />
                <View style={{width: '100%', paddingLeft: 15, marginBottom: 40}}>
                    <Pressable
                        onPress={() => console.log('Восстановить пароль.')}
                    >
                        {({ pressed }) => (
                            <Text style={[logInStyles.forgotButton, { opacity: pressed ? 0.8 : 1 }]}>{t('forgot_password')}</Text>
                        )}
                    </Pressable>
                </View>
                <Pressable 
                    onPress={() => router.navigate('/Menu')}
                    style={regStyles.signButton}
                >
                    {({ pressed }) => (
                        <Text style={[regStyles.text, { opacity: pressed ? 0.8 : 1 }]}>{t('log_in')}</Text>
                    )}
                </Pressable>
            </View>
        </ImageBackground>
    );
}